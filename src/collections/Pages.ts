import type { CollectionConfig } from 'payload'
import { allBlocks } from '../blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: allBlocks,
      required: true,
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO & Metadata',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Pediatrics Board Review | PBR',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Pediatrics Board Review (PBR) offers streamlined, high-yield study resources and proven strategies to help pediatricians pass their board exams with confidence.',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
