import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { SiteSetting, Header, Footer } from '@/payload-types'

export async function getSiteSettings(): Promise<SiteSetting | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({
      slug: 'site-settings',
    })
    return data
  } catch (error) {
    console.error('Error fetching site-settings global:', error)
    return null
  }
}

export async function getHeader(): Promise<Header | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({
      slug: 'header',
      depth: 1,
    })
    return data
  } catch (error) {
    console.error('Error fetching header global:', error)
    return null
  }
}

export async function getFooter(): Promise<Footer | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({
      slug: 'footer',
      depth: 1,
    })
    return data
  } catch (error) {
    console.error('Error fetching footer global:', error)
    return null
  }
}

export async function getAllSiteGlobals() {
  const [siteSettings, header, footer] = await Promise.all([
    getSiteSettings(),
    getHeader(),
    getFooter(),
  ])

  return {
    siteSettings,
    header,
    footer,
  }
}
