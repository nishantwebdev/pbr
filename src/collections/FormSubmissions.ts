import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'email',
    group: 'Leads & CRM',
    defaultColumns: ['formType', 'name', 'email', 'createdAt'],
  },
  access: {
    create: () => true, // Allows public submission from frontend form
    read: ({ req }) => Boolean(req.user), // Admin only
  },
  fields: [
    {
      name: 'formType',
      type: 'text',
      required: true,
      defaultValue: 'Free Chapters Download',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'metadata',
      type: 'json',
    },
  ],
  timestamps: true,
}
