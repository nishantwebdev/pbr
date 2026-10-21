import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site Config',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'announcementBar',
      type: 'group',
      label: 'Top Preorder Announcement Bar',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'text',
          type: 'text',
          defaultValue: '2026 Edition Includes FREE Instant Online Access when you Preorder the 2027 Edition for just $1',
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'PREORDER FOR $1 →',
        },
        {
          name: 'buttonUrl',
          type: 'text',
          defaultValue: '#preorder-2027',
        },
      ],
    },
    {
      name: 'riskCalculatorUrl',
      type: 'text',
      label: 'Risk Calculator Page URL',
      defaultValue: '/risk-calculator',
    },
    {
      name: 'infusionsoftOrderFormUrl',
      type: 'text',
      label: 'Question Bank Checkout URL',
      defaultValue: 'https://sz258.infusionsoft.app/app/orderForms/a9c2a4e4-aed2-48c5-ae5c-9617140bf3a7',
    },
  ],
}
