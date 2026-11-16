// All of the restaurant's details live here, so updating a phone number, a
// link or the opening hours never means touching the page layout.

export const site = {
  name: 'Chuan City',
  cuisine: 'Chinese',
  tagline: 'Classic Chinese cooking, fresh from the wok, in the heart of Walkinstown.',

  phoneDisplay: '01 450 9032',
  phoneHref: 'tel:+35314509032',

  address: {
    lines: ['2 Long Mile Road', 'Walkinstown', 'Dublin 12', 'D12 PK8H'],
    oneLine: '2 Long Mile Rd, Walkinstown, Dublin 12, D12 PK8H, Ireland'
  },
  // The pin used by the current site's map.
  coords: { lat: 53.324161529541016, lng: -6.32908296585083 },

  // Copied from the current chuancityrestaurant.ie. Online ordering and both
  // apps run on the Ever Dish platform.
  links: {
    orderOnline: 'https://www.chuancityrestaurant.ie/selectOrderType?rId=2717',
    appStore: 'https://itunes.apple.com/us/app/easydish/id1459858045?l=zh&ls=1&mt=8',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.sainoco.apps.easydish',
    terms: 'https://www.chuancityrestaurant.ie/linkPage?page=terms',
    privacy: 'https://www.chuancityrestaurant.ie/linkPage?page=privacy',
    help: 'https://www.chuancityrestaurant.ie/help',
    everDish: 'https://www.everdish.ie/',
    facebook: 'https://www.facebook.com/chauncity/'
  },

  delivery: {
    fee: 'Local delivery from €3.00',
    minimum: 'No minimum order',
    deliveryTime: '5:00pm – 11:15pm',
    collectionTime: '5:00pm – 11:59pm'
  },

  // Opening hours, from the Google Business listing.
  hours: [
    { days: 'Monday – Thursday', time: '4:30pm – 11:30pm' },
    { days: 'Friday – Saturday', time: '4:30pm – 12:00am' },
    { days: 'Sunday', time: '1:00pm – 11:30pm' }
  ]
};

// The printed menus, served from public/menus/. Takeaway and dine-in prices differ.
export const menus = [
  {
    name: 'Takeaway menu',
    note: 'Collection & delivery prices, set dinners and meal deals',
    href: '/menus/chuan-city-takeaway-menu.pdf'
  },
  {
    name: 'Dine-in menu',
    note: 'Prices for eating in at our restaurant',
    href: '/menus/chuan-city-dine-in-menu.pdf'
  }
];

const query = encodeURIComponent(`Chuan City, ${site.address.oneLine}`);
export const mapEmbedUrl = `https://www.google.com/maps?q=${query}&ll=${site.coords.lat},${site.coords.lng}&z=16&output=embed`;
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

// Photo slots. Drop a real photo into public/photos/ and set `src`
// (for example '/photos/dining-room.jpg'); until then a styled placeholder shows.
export type Photo = { label: string; hint: string; src?: string };

export const photos = {
  hero: { label: 'Hero photo', hint: 'A signature dish shot close up, steam rising, dark background' },
} satisfies Record<string, Photo>;

