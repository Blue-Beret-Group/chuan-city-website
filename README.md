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

## Menus

The takeaway and dine-in menus are PDFs in `public/menus/`. To update one, replace the file and keep its name (`chuan-city-takeaway-menu.pdf` or `chuan-city-dine-in-menu.pdf`). Their labels are in `menus` in `src/site.ts`.

## Adding photos

Every photo on the page is a labelled placeholder until a real one is added:

1. Put the image in `public/photos/` (for example `dining-room.jpg`).
2. In `src/site.ts`, add `src: '/photos/dining-room.jpg'` to the matching entry in `photos` or `dishes`.

Each placeholder shows the shot it expects (the hero dish and one per menu category).

## Online ordering

Ordering, the apps and the terms/privacy/help pages are run by Ever Dish. The **Order now** link currently points at `www.chuancityrestaurant.ie/selectOrderType?rId=2717`, which is served by Ever Dish. If the domain is moved to this site, ask Ever Dish for the ordering page's alternative address and update `links` in `src/site.ts` first, or ordering will break.
