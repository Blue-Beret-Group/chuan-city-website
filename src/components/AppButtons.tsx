import { site } from '@/site';

export function AppButtons() {
  return (
    <div className="app-buttons">
      <a className="app-button" href={site.links.appStore} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-3.9zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z" />
        </svg>
        <span><small>Download on the</small>App Store</span>
      </a>
      <a className="app-button" href={site.links.googlePlay} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M4 2.6c-.2.2-.3.6-.3 1v16.8c0 .4.1.8.3 1l9.4-9.4zM14.5 13.1l2.9 2.9-11.6 6.6c-.4.2-.8.3-1.1.1zM17.5 8l-2.9 2.9-9.9-9.9c.3-.1.7 0 1.1.2zM18.8 8.7l3 1.7c.9.5.9 1.8 0 2.3l-3 1.7-3.2-2.8z" />
        </svg>
        <span><small>Get it on</small>Google Play</span>
      </a>
    </div>
  );
}
