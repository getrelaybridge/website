# RelayBridge website

The public website for [RelayBridge](https://getrelaybridge.com), an open-source project for modern email delivery from legacy SMTP devices and applications. RelayBridge starts with Microsoft 365 / Exchange Online as its current v1.0 target.

RelayBridge application source is public at [getrelaybridge/relaybridge](https://github.com/getrelaybridge/relaybridge) under the Mozilla Public License 2.0 (`MPL-2.0`). The unsigned [v1.0.0-rc.1 Windows release candidate](https://github.com/getrelaybridge/relaybridge/releases/tag/v1.0.0-rc.1) is available for evaluation and community testing. A signed stable Windows release is not yet available.

This repository contains the static public website only. It does not depend on, import, or contain the RelayBridge application source or private configuration.

## Local development

Requirements:

- Node.js 22.19 or later
- npm 10 or later

Install dependencies and start the local development server:

```sh
npm ci
npm run dev
```

Useful commands:

```sh
npm run dev      # Start the development server
npm run build    # Generate the static site in dist/
npm run preview  # Preview the generated site
npm run check    # Run Astro and TypeScript checks
```

## Deployment

The site is configured for static output and is intended for Cloudflare Pages. The canonical origin is `https://getrelaybridge.com`.

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`

The site needs no production secrets or runtime environment variables.

## Contributing

Small fixes are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a substantial content or design change. Product and security claims must remain accurate to the current public state of RelayBridge.

## License

The RelayBridge application is licensed under MPL-2.0 in its [source repository](https://github.com/getrelaybridge/relaybridge). This website repository remains MIT licensed; see [LICENSE](LICENSE).

## Complete website index

The links below mirror every indexable route in the production sitemap.

### Main website

- [RelayBridge homepage](https://getrelaybridge.com/)
- [How RelayBridge works](https://getrelaybridge.com/how-it-works/)
- [Security](https://getrelaybridge.com/security/)
- [Release status and download](https://getrelaybridge.com/download/)
- [About RelayBridge](https://getrelaybridge.com/about/)
- [Privacy](https://getrelaybridge.com/privacy/)

### Administrator documentation

- [Administrator documentation hub](https://getrelaybridge.com/docs/)
- [Requirements and planning](https://getrelaybridge.com/docs/requirements/)
- [Install RelayBridge](https://getrelaybridge.com/docs/install/)
- [First-run checklist](https://getrelaybridge.com/docs/first-run/)
- [Microsoft 365 setup](https://getrelaybridge.com/docs/microsoft-365/setup/)
- [Microsoft 365 identity and certificate](https://getrelaybridge.com/docs/microsoft-365/identity/)
- [Exchange Application RBAC](https://getrelaybridge.com/docs/microsoft-365/exchange-rbac/)
- [Microsoft 365 verification](https://getrelaybridge.com/docs/microsoft-365/verification/)
- [Printer connectivity](https://getrelaybridge.com/docs/devices/printer-connectivity/)
- [Add a device](https://getrelaybridge.com/docs/devices/add-device/)
- [Device security modes](https://getrelaybridge.com/docs/devices/security-modes/)
- [Queue and delivery](https://getrelaybridge.com/docs/operations/queue-delivery/)
- [Diagnostics and support](https://getrelaybridge.com/docs/operations/diagnostics/)
- [Servicing, repair, upgrade, and uninstall](https://getrelaybridge.com/docs/operations/servicing/)
- [Documentation security model](https://getrelaybridge.com/docs/security/)
- [Troubleshooting RelayBridge](https://getrelaybridge.com/docs/troubleshooting/)
- [Administrator reference](https://getrelaybridge.com/docs/reference/)

### Technical guides

- [Technical guides hub](https://getrelaybridge.com/guides/)
- [Microsoft 365 SMTP relay for legacy printers](https://getrelaybridge.com/guides/microsoft-365-smtp-relay-legacy-printers/)
- [Scan to email with Microsoft 365](https://getrelaybridge.com/guides/scan-to-email-microsoft-365/)
- [Exchange Online SMTP OAuth for legacy applications](https://getrelaybridge.com/guides/exchange-online-smtp-oauth-legacy-apps/)
- [Exchange Online SMTP OAuth with Application RBAC](https://getrelaybridge.com/guides/exchange-online-smtp-oauth-app-rbac/)
- [Microsoft Entra certificate rotation for SMTP OAuth](https://getrelaybridge.com/guides/microsoft-entra-smtp-oauth-certificate-rotation/)
- [Microsoft 365 SMTP options compared](https://getrelaybridge.com/guides/microsoft-365-smtp-options-compared/)
- [Exchange Online tenant external recipient limits](https://getrelaybridge.com/guides/exchange-online-tenant-external-recipient-rate-limit/)
- [Microsoft 365 High Volume Email for printers and applications](https://getrelaybridge.com/guides/microsoft-365-high-volume-email-printers-applications/)
- [Secure Direct Send with RejectDirectSend and Change Optics](https://getrelaybridge.com/guides/exchange-online-reject-direct-send-change-optics/)
- [Troubleshooting Exchange Online SMTP errors](https://getrelaybridge.com/guides/troubleshooting-exchange-online-smtp-errors/)
- [Microsoft 365 SMTP relay for dynamic-IP branch offices](https://getrelaybridge.com/guides/office-365-smtp-relay-dynamic-ip-branch-offices/)
- [Legacy printer TLS handshake failures with Microsoft 365](https://getrelaybridge.com/guides/legacy-printer-tls-cipher-suite-microsoft-365/)
- [Windows Server 2025 SMTP Server replacement options](https://getrelaybridge.com/guides/windows-server-2025-smtp-server-replacement/)
- [Exchange Online SMTP Basic Auth changes and migration options](https://getrelaybridge.com/guides/exchange-online-smtp-basic-auth-deprecation-2026/)
- [Exchange Online SMTP AUTH rate limits and burst queuing](https://getrelaybridge.com/guides/exchange-online-smtp-auth-rate-limits/)
- [Security Defaults and SMTP AUTH for printers and legacy applications](https://getrelaybridge.com/guides/security-defaults-smtp-auth-microsoft-365/)
- [PowerShell Send-MailMessage replacement options for Microsoft 365](https://getrelaybridge.com/guides/powershell-send-mailmessage-replacement-microsoft-365/)
- [Legacy appliance email alerts to Microsoft 365](https://getrelaybridge.com/guides/legacy-appliance-email-alerts-microsoft-365/)

### Project and release resources

- [RelayBridge application repository](https://github.com/getrelaybridge/relaybridge)
- [RelayBridge website repository](https://github.com/getrelaybridge/website)
- [RelayBridge v1.0.0-rc.1 release](https://github.com/getrelaybridge/relaybridge/releases/tag/v1.0.0-rc.1)
- [RelayBridge v1.0.0-rc.1 source](https://github.com/getrelaybridge/relaybridge/tree/v1.0.0-rc.1)
- [Application security policy](https://github.com/getrelaybridge/relaybridge/blob/main/SECURITY.md)
- [Application issue tracker](https://github.com/getrelaybridge/relaybridge/issues)
- [Production sitemap](https://getrelaybridge.com/sitemap.xml)
- [Robots policy](https://getrelaybridge.com/robots.txt)
