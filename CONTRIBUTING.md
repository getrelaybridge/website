# Contributing to the RelayBridge website

Thank you for helping improve the public RelayBridge website.

## Before making a large change

Open an issue before beginning a major redesign, information-architecture change, or new dependency. This keeps the site focused and avoids parallel work on a direction that has not been agreed.

## Project principles

- Keep the website static and useful without client-side JavaScript.
- Preserve WCAG 2.2 AA fundamentals and test keyboard navigation.
- Do not add analytics, tracking, advertising, or third-party embeds without an explicit project decision.
- Use sanitized public product information only. Never add tenant identifiers, certificates, internal addresses, test credentials, tokens, or private configuration.
- Keep Microsoft wording descriptive and do not imply affiliation, endorsement, or certification.
- Do not present unreleased functionality, unsupported platforms, or unverified security behavior as complete.

## Validate a change

Run the following before opening a pull request:

```sh
npm ci
npm run check
npm run build
git diff --check
```

Review changed pages at phone and desktop widths, including visible focus states and heading order.
