# RelayBridge website

The public website for [RelayBridge](https://getrelaybridge.com), an open-source, local SMTP-to-Microsoft-365 modernization bridge for legacy devices and applications.

This repository contains the static public website only. It does not depend on, import, or contain RelayBridge application source or private configuration.

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
