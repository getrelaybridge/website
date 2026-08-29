# RelayBridge website

The public website for [RelayBridge](https://getrelaybridge.com), an open-source project for modern email delivery from legacy SMTP devices and applications. RelayBridge starts with Microsoft 365 / Exchange Online as its current v1.0 target.

RelayBridge application source is public at [getrelaybridge/relaybridge](https://github.com/getrelaybridge/relaybridge) under the Mozilla Public License 2.0 (`MPL-2.0`). Official signed Windows binaries are still in release preparation.

This repository contains the static public website only. It does not depend on, import, or contain the RelayBridge application source or private configuration.

## Technical guides

Browse all [RelayBridge technical guides](https://getrelaybridge.com/guides/), including:

- [Microsoft 365 SMTP relay for legacy printers](https://getrelaybridge.com/guides/microsoft-365-smtp-relay-legacy-printers/)
- [Scan to email with Microsoft 365](https://getrelaybridge.com/guides/scan-to-email-microsoft-365/)
- [Exchange Online SMTP OAuth for legacy applications](https://getrelaybridge.com/guides/exchange-online-smtp-oauth-legacy-apps/)
- [Microsoft 365 SMTP options compared](https://getrelaybridge.com/guides/microsoft-365-smtp-options-compared/)
- [Troubleshooting Exchange Online SMTP errors](https://getrelaybridge.com/guides/troubleshooting-exchange-online-smtp-errors/)
- [Microsoft 365 SMTP relay for dynamic-IP branch offices](https://getrelaybridge.com/guides/office-365-smtp-relay-dynamic-ip-branch-offices/)
- [Legacy printer TLS handshake failures with Microsoft 365](https://getrelaybridge.com/guides/legacy-printer-tls-cipher-suite-microsoft-365/)
- [Windows Server 2025 SMTP Server replacement options](https://getrelaybridge.com/guides/windows-server-2025-smtp-server-replacement/)
- [Exchange Online SMTP Basic Auth changes and migration options](https://getrelaybridge.com/guides/exchange-online-smtp-basic-auth-deprecation-2026/)
- [Exchange Online SMTP AUTH rate limits and burst queuing](https://getrelaybridge.com/guides/exchange-online-smtp-auth-rate-limits/)
- [Security Defaults and SMTP AUTH for printers and legacy applications](https://getrelaybridge.com/guides/security-defaults-smtp-auth-microsoft-365/)
- [PowerShell Send-MailMessage replacement options for Microsoft 365](https://getrelaybridge.com/guides/powershell-send-mailmessage-replacement-microsoft-365/)
- [Legacy appliance email alerts to Microsoft 365](https://getrelaybridge.com/guides/legacy-appliance-email-alerts-microsoft-365/)

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
