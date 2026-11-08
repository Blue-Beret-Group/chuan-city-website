# Chuan City website

Redesign of [chuancityrestaurant.ie](https://www.chuancityrestaurant.ie/) for Chuan City, 2 Long Mile Rd, Walkinstown, Dublin 12.

Next.js, exported as a static site (`out/`), deployable on Vercel like the Blue Beret site.

```bash
npm install
npm run dev     # local preview
npm run build   # static export to out/
```

## Editing content

Everything the restaurant might change lives in `src/site.ts`: phone, address, opening hours, delivery times, and the ordering, app and footer links.

## Adding photos

Every photo on the page is a labelled placeholder until a real one is added:

1. Put the image in `public/photos/` (for example `dining-room.jpg`).
2. In `src/site.ts`, add `src: '/photos/dining-room.jpg'` to the matching entry in `photos` or `dishes`.

Each placeholder shows the shot it expects (hero dish, dining room, kitchen, party table, celebrations, banquet spread and one per menu category).

## Online ordering

Ordering, the apps and the terms/privacy/help pages are run by Ever Dish. The **Order now** link currently points at `www.chuancityrestaurant.ie/selectOrderType?rId=2717`, which is served by Ever Dish. If the domain is moved to this site, ask Ever Dish for the ordering page's alternative address and update `links` in `src/site.ts` first, or ordering will break.
