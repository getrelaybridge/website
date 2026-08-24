# RelayBridge website

The public website for [RelayBridge](https://getrelaybridge.com), an open-source project for modern email delivery from legacy SMTP devices and applications. RelayBridge starts with Microsoft 365 / Exchange Online as its current v1.0 target.

This repository contains the static public website only. It does not depend on, import, or contain RelayBridge application source or private configuration.

## Technical guides

Browse all [RelayBridge technical guides](https://getrelaybridge.com/guides/), including:

- [Microsoft 365 SMTP relay for legacy printers](https://getrelaybridge.com/guides/microsoft-365-smtp-relay-legacy-printers/)
- [Scan to email with Microsoft 365](https://getrelaybridge.com/guides/scan-to-email-microsoft-365/)
- [Exchange Online SMTP OAuth for legacy applications](https://getrelaybridge.com/guides/exchange-online-smtp-oauth-legacy-apps/)

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

MIT. See [LICENSE](LICENSE).
