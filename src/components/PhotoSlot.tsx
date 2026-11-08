import type { Photo } from '@/site';

// Shows the real photo once one is set, otherwise a labelled placeholder that
// tells whoever supplies photos exactly which shot belongs here.
export function PhotoSlot({ photo, className = '' }: { photo: Photo; className?: string }) {
  if (photo.src) {
    return <img className={`photo ${className}`} src={photo.src} alt={photo.label} loading="lazy" />;
  }
  return (
    <div className={`photo placeholder ${className}`} role="img" aria-label={`Photo placeholder: ${photo.label}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h3l2-2h6l2 2h3v12H4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <strong>{photo.label}</strong>
      <span>{photo.hint}</span>
    </div>
  );
}
