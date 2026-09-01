export interface DocsPage {
  href: string;
  label: string;
  description: string;
}

export interface DocsSection {
  title: string;
  pages: DocsPage[];
}

export const docsSections: DocsSection[] = [
  {
    title: 'Getting started',
    pages: [
      { href: '/docs/', label: 'Overview', description: 'Choose the right deployment path and understand the RC1 boundaries.' },
      { href: '/docs/requirements/', label: 'Requirements and planning', description: 'Prepare Windows, Microsoft 365, network, sender, and device prerequisites.' },
      { href: '/docs/install/', label: 'Install RelayBridge RC1', description: 'Use the supported bootstrapper and complete the local installation.' },
      { href: '/docs/first-run/', label: 'First-run checklist', description: 'Move from installation through Microsoft setup, device configuration, and testing.' },
    ],
  },
  {
    title: 'Microsoft 365',
    pages: [
      { href: '/docs/microsoft-365/setup/', label: 'Microsoft 365 setup', description: 'Complete the released wizard and activate a verified candidate.' },
      { href: '/docs/microsoft-365/identity/', label: 'Identity and certificate', description: 'Understand the customer-owned Entra application and local certificate.' },
      { href: '/docs/microsoft-365/exchange-rbac/', label: 'Exchange RBAC', description: 'Scope SMTP authorization to one selected sender mailbox.' },
      { href: '/docs/microsoft-365/verification/', label: 'Step 5 verification', description: 'Handle bounded verification and possible Exchange propagation safely.' },
    ],
  },
  {
    title: 'Devices',
    pages: [
      { href: '/docs/devices/printer-connectivity/', label: 'Printer connectivity', description: 'Bind the private listener, apply the configuration, and handle Windows Firewall.' },
      { href: '/docs/devices/add-device/', label: 'Add a device', description: 'Create a printer or legacy SMTP device and send a synthetic test.' },
      { href: '/docs/devices/security-modes/', label: 'Security modes', description: 'Choose Authenticated or Legacy mode and enforce source and sender restrictions.' },
    ],
  },
  {
    title: 'Operations',
    pages: [
      { href: '/docs/operations/queue-delivery/', label: 'Queue and delivery', description: 'Interpret durable local acceptance, retries, and Exchange Online acceptance.' },
      { href: '/docs/operations/diagnostics/', label: 'Diagnostics and support', description: 'Collect bounded health evidence and review sanitized support bundles.' },
      { href: '/docs/operations/servicing/', label: 'Servicing', description: 'Restart, upgrade, repair, or uninstall without losing track of retained state.' },
    ],
  },
  {
    title: 'Security',
    pages: [
      { href: '/docs/security/', label: 'Security model', description: 'Review implemented controls, administrator responsibilities, residual risks, and RC1 limitations.' },
    ],
  },
  {
    title: 'Troubleshooting',
    pages: [
      { href: '/docs/troubleshooting/', label: 'Troubleshooting RelayBridge', description: 'Follow symptom-led checks without weakening the product boundaries.' },
    ],
  },
  {
    title: 'Reference',
    pages: [
      { href: '/docs/reference/', label: 'Administrator reference', description: 'Find verified paths, endpoints, versions, licenses, and support links.' },
    ],
  },
];

export const docsPages = docsSections.flatMap((section) =>
  section.pages.map((page) => ({ ...page, section: section.title })),
);
