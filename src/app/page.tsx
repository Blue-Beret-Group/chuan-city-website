import { site, photos, dishes, mapEmbedUrl, mapUrl, directionsUrl } from '@/site';
import { PhotoSlot } from '@/components/PhotoSlot';
import { AppButtons } from '@/components/AppButtons';
import { HoursTable } from '@/components/HoursTable';

const nav = [
  { href: '#menu', label: 'Menu' },
  { href: '#parties', label: 'Parties' },
  { href: '#hours', label: 'Hours' },
  { href: '#find-us', label: 'Find us' }
];

function Seal({ className = '' }: { className?: string }) {
  return (
    <span className={`seal ${className}`} aria-hidden="true">
      {[...site.chineseName].map((char) => <span key={char}>{char}</span>)}
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="brand" aria-label={`${site.name} home`}>
            <Seal />
            <span className="brand-name">{site.name}</span>
          </a>
          <nav aria-label="Main">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={site.phoneHref}><PhoneIcon />{site.phoneDisplay}</a>
            <a className="btn btn-primary btn-small" href={site.links.orderOnline}>Order now</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{site.cuisine} · Walkinstown, Dublin 12</p>
              <h1>
                <Seal className="seal-large" />
                {site.name}
              </h1>
              <p className="lede">{site.tagline}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href={site.links.orderOnline}>Order online</a>
                <a className="btn btn-ghost" href={site.phoneHref}><PhoneIcon />Call {site.phoneDisplay}</a>
              </div>
              <AppButtons />
            </div>
            <PhotoSlot photo={photos.hero} className="hero-photo" />
          </div>
          <div className="wrap">
            <ul className="facts">
              <li><span>Delivery</span>{site.delivery.deliveryTime}</li>
              <li><span>Collection</span>{site.delivery.collectionTime}</li>
              <li><span>{site.delivery.fee}</span>{site.delivery.minimum}</li>
            </ul>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">From the kitchen</p>
              <h2>Something for every table</h2>
              <p>From the takeaway classics you grew up on to the real heat of Sichuan cooking. The full menu, with prices, is on our ordering page and in the app.</p>
            </div>
            <div className="dish-grid">
              {dishes.map((dish) => (
                <article key={dish.name} className="dish">
                  <PhotoSlot photo={dish.photo} />
                  <h3>{dish.name}</h3>
                  <p>{dish.note}</p>
                </article>
              ))}
            </div>
            <div className="center">
              <a className="btn btn-primary" href={site.links.orderOnline}>See the full menu &amp; order</a>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap split">
            <div className="photo-pair">
              <PhotoSlot photo={photos.diningRoom} />
              <PhotoSlot photo={photos.kitchen} />
            </div>
            <div>
              <p className="eyebrow">Eat in, collect or delivered</p>
              <h2>Your local on Long Mile Road</h2>
              <p>Pull up a chair in our dining room, call ahead and collect, or have it brought to your door. However you like it, every dish comes straight from the wok.</p>
              <ul className="ticks">
                <li>{site.delivery.fee}</li>
                <li>{site.delivery.minimum}</li>
                <li>Order online, in the app or by phone</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="parties" className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Parties &amp; groups</p>
              <h2>Bring everyone</h2>
              <p>Birthdays, work dos, family get-togethers. We’ll set the table and keep the dishes coming. Call us to book a table for your group.</p>
            </div>
            <div className="party-grid">
              <PhotoSlot photo={photos.partyTable} className="party-main" />
              <PhotoSlot photo={photos.partyGuests} />
              <PhotoSlot photo={photos.partySpread} />
            </div>
            <div className="center">
              <a className="btn btn-primary" href={site.phoneHref}><PhoneIcon />Book on {site.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <section className="app-band">
          <div className="wrap app-inner">
            <div>
              <p className="eyebrow">Order on the go</p>
              <h2>Get the app</h2>
              <p>Browse the menu and order your favourites in a few taps.</p>
            </div>
            <AppButtons />
          </div>
        </section>

        <section id="hours" className="section">
          <div className="wrap hours-grid">
            <div>
              <p className="eyebrow">When we’re open</p>
              <h2>Opening hours</h2>
              <HoursTable />
            </div>
            <div className="card">
              <h3>Delivery &amp; collection</h3>
              <dl className="hours compact">
                <div><dt>Delivery</dt><dd>{site.delivery.deliveryTime}</dd></div>
                <div><dt>Collection</dt><dd>{site.delivery.collectionTime}</dd></div>
              </dl>
              <p className="muted">{site.delivery.fee} · {site.delivery.minimum}</p>
              <a className="btn btn-primary btn-block" href={site.links.orderOnline}>Order now</a>
            </div>
          </div>
        </section>

        <section id="find-us" className="section section-alt">
          <div className="wrap map-grid">
            <div className="map-frame">
              <iframe
                title={`Map showing ${site.name}, ${site.address.oneLine}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="card contact-card">
              <p className="eyebrow">Find us</p>
              <h2>{site.name}</h2>
              <address>
                {site.address.lines.map((line) => <span key={line}>{line}</span>)}
              </address>
              <a className="contact-phone" href={site.phoneHref}><PhoneIcon />{site.phoneDisplay}</a>
              <div className="stack">
                <a className="btn btn-primary btn-block" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
                <a className="btn btn-ghost btn-block" href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </div>
              <p className="muted">Feedback on your order? Call us, or leave a review on our Google listing.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="brand">
            <Seal />
            <span className="brand-name">{site.name}</span>
          </div>
          <nav aria-label="Footer">
            <a href={site.links.terms}>Terms &amp; conditions</a>
            <a href={site.links.privacy}>Privacy</a>
            <a href={site.links.help}>Help</a>
            {site.links.facebook && <a href={site.links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
          </nav>
          <p className="muted">
            © {year} {site.name} · {site.address.oneLine}<br />
            Online ordering powered by <a href={site.links.everDish}>Ever Dish</a>
          </p>
        </div>
      </footer>

      <div className="mobile-bar">
        <a className="btn btn-ghost" href={site.phoneHref}><PhoneIcon />Call</a>
        <a className="btn btn-primary" href={site.links.orderOnline}>Order now</a>
      </div>
    </>
  );
}
