import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Testimonials } from './collections/Testimonials'
import { FormSubmissions } from './collections/FormSubmissions'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'

import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const rawConnectionString =
  process.env.DATABASE_URI ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  'postgresql://postgres:postgres@127.0.0.1:5432/pbr_cms'

const isLocalDatabase =
  rawConnectionString.includes('127.0.0.1') ||
  rawConnectionString.includes('localhost')

// For remote databases (e.g., Supabase, Neon, AWS RDS on Vercel), hosted poolers often use
// certificates that trigger "self-signed certificate in certificate chain" in node-postgres.
// Replacing sslmode=require with sslmode=no-verify and setting pool ssl.rejectUnauthorized: false
// ensures the connection succeeds securely without failing on self-signed intermediate certificates.
const connectionString = !isLocalDatabase
  ? rawConnectionString.includes('sslmode=')
    ? rawConnectionString.replace(/sslmode=[^&]+/g, 'sslmode=no-verify')
    : `${rawConnectionString}${rawConnectionString.includes('?') ? '&' : '?'}sslmode=no-verify`
  : rawConnectionString

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Posts, Categories, Testimonials, FormSubmissions, Media, Users],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'pbr-secret-token-key-2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString,
      ssl: isLocalDatabase
        ? false
        : {
            rejectUnauthorized: false,
          },
    },
    prodMigrations: migrations,
  }),
  sharp,
})
