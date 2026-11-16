import { site, photos, dishes, menus, mapEmbedUrl, mapUrl, directionsUrl } from '@/site';
import { PhotoSlot } from '@/components/PhotoSlot';
import { AppButtons } from '@/components/AppButtons';
import { HoursTable } from '@/components/HoursTable';

const nav = [
  { href: '#menu', label: 'Menu' },
  { href: '#hours', label: 'Hours' },
  { href: '#find-us', label: 'Find us' }
];

function Logo({ className = '' }: { className?: string }) {
  return <img className={`logo ${className}`} src="/logo.png" alt="" width={320} height={320} />;
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M6 3h9l4 4v14H6zM15 3v4h4M9 11h7M9 15h7M9 19h4" />
    </svg>
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
            <Logo />
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
                <Logo className="logo-large" />
                {site.name}
              </h1>
              <p className="lede">{site.tagline}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href={site.links.orderOnline}>Order online</a>
                <a className="btn btn-ghost" href="#menu"><MenuIcon />View menus</a>
                <a className="btn btn-ghost" href={site.phoneHref}><PhoneIcon />Call {site.phoneDisplay}</a>
              </div>
              <AppButtons />
            </div>
            <PhotoSlot photo={photos.hero} className="hero-photo" />
          </div>
        </section>

        <section id="menu" className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">From the kitchen</p>
              <h2>Something for every table</h2>
              <p>All the Chinese takeaway classics you grew up on, cooked fresh to order. Takeaway and dine-in prices are different, so pick the menu you need.</p>
            </div>
            <div className="menu-picker">
              {menus.map((menu) => (
                <a key={menu.href} className="menu-card" href={menu.href} target="_blank" rel="noopener">
                  <span className="menu-card-icon"><MenuIcon /></span>
                  <span className="menu-card-text">
                    <strong>{menu.name}</strong>
                    <span>{menu.note}</span>
                  </span>
                  <span className="menu-card-cta">Open PDF</span>
                </a>
              ))}
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
              <a className="btn btn-primary" href={site.links.orderOnline}>Order online</a>
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
              <p className="muted">
                Feedback on your order? Call us, leave a review on our Google listing
                {site.links.facebook && <>, or message us on <a href={site.links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></>}.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="brand">
            <Logo />
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
