// All of the restaurant's details live here, so updating a phone number, a
// link or the opening hours never means touching the page layout.

export const site = {
  name: 'Chuan City',
  chineseName: '蜀都',
  cuisine: 'Chinese & Thai',
  tagline: 'Classic Chinese favourites and bold Sichuan specialties, cooked fresh in Walkinstown.',

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
    // The current site's Facebook icon has no link. Add the page URL here to show it.
    facebook: ''
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

const query = encodeURIComponent(`Chuan City, ${site.address.oneLine}`);
export const mapEmbedUrl = `https://www.google.com/maps?q=${query}&ll=${site.coords.lat},${site.coords.lng}&z=16&output=embed`;
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

// Photo slots. Drop a real photo into public/photos/ and set `src`
// (for example '/photos/dining-room.jpg'); until then a styled placeholder shows.
export type Photo = { label: string; hint: string; src?: string };

export const photos = {
  hero: { label: 'Hero photo', hint: 'A signature dish shot close up, steam rising, dark background' },
  diningRoom: { label: 'Dining room', hint: 'The first-floor dining room, tables set' },
  kitchen: { label: 'In the kitchen', hint: 'Chef at the wok, flames up' },
  partyTable: { label: 'Party table', hint: 'A long table set for a group celebration' },
  partyGuests: { label: 'Celebrations', hint: 'Guests raising a toast at a birthday or work party' },
  partySpread: { label: 'Banquet spread', hint: 'Sharing platters laid out for a group' }
} satisfies Record<string, Photo>;

// Categories only: dishes and prices live in the online ordering menu.
export const dishes: { name: string; note: string; photo: Photo }[] = [
  { name: 'Sichuan specialties', note: 'Numbing peppercorn, chilli oil and real heat.', photo: { label: 'Sichuan dish', hint: 'A Sichuan chilli dish' } },
  { name: 'Chinese classics', note: 'Sweet and sour chicken, curries and all the favourites.', photo: { label: 'Classic dish', hint: 'Sweet and sour chicken with egg fried rice' } },
  { name: 'Thai kitchen', note: 'Fragrant curries and wok-fried noodles.', photo: { label: 'Thai dish', hint: 'A Thai curry or noodle dish' } },
  { name: 'Set meals', note: 'Good-value combos for one, two or the whole house.', photo: { label: 'Set meal', hint: 'A set meal laid out for two' } }
];
