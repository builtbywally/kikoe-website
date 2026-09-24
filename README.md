<p align="center">
  <img src="app/icon.svg" width="72" alt="こえ, the Kikoe logo" />
</p>

<h1 align="center">kikoe-website</h1>

<p align="center">
  The one-page site for <a href="https://github.com/builtbywally/kikoe">Kikoe</a>, the room you run your coding agents from, by voice.
</p>

It's built from the app's own pieces, not screenshots:

- **The dotted orb** you hold to talk, drawn by the
  [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs) engine the app
  uses (vendored in `lib/vendor`, MIT).
- **The switchboard.** Type a sentence and watch it go through the ear, "for
  Kik?", the reflexes and Jev to whoever does it. `lib/router.ts` is a browser
  toy that mirrors the app's routing, with tests in `test/`.
- **A board you can use.** Drag it, drag the cards, answer the permission.
- **The Room** playing a turn, **the phone page** in an iPhone 17 Pro or Pixel
  10 Pro frame, and **the island**, all in the app's CSS.
- **A quick start** you can tick off.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static export in out/
pnpm test         # the switchboard's routing
pnpm lint
pnpm typecheck
```

Next.js 16 and React 19, exported as static files (`output: "export"`).
`KIKOE_SITE_BASE=/path` serves it under a path; `KIKOE_SITE_URL` sets the URL
used in its link previews.

## Deploy

It deploys to Vercel. The project builds this repo on every push to `main`,
and `vercel deploy --prod` from here deploys by hand.

## Things it takes from the app repo

These scripts read from a checkout of
[kikoe](https://github.com/builtbywally/kikoe) at `../kikoe`, or wherever
`KIKOE_REPO` points:

| Script | What it does |
|---|---|
| `pnpm images` | Makes `public/img/backdrop.webp` from the app's aurora backdrop |
| `pnpm readme-images` | After `pnpm build`: draws the app README's hero and pipeline SVGs, and captures the Room, the phones, the island, the switchboard and the board from this site with headless Chrome, into `kikoe/docs/images/readme` |

The logo, こえ, comes from the app repo's `brand/make.mjs`. `app/icon.svg` and
`components/koe.ts` are copies of what it generates; copy them again when it
changes.

## License

MIT. こえ is set from Noto Serif JP (SIL Open Font License).
