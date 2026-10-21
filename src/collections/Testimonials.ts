import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    group: 'Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Board Certified Pediatrician',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'date',
      type: 'text',
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Google Review', value: 'google' },
        { label: 'Trustindex', value: 'trustindex' },
        { label: 'Direct Testimonial', value: 'direct' },
        { label: 'Video Testimonial', value: 'video' },
      ],
      defaultValue: 'google',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
