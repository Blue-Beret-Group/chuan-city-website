'use client';

import { useEffect, useState } from 'react';
import { site } from '@/site';

// Index into site.hours for each day of the week, Sunday first (Date.getDay order).
const rowForDay = [2, 0, 0, 0, 0, 1, 1];

export function HoursTable() {
  // Worked out after load so the static HTML never bakes in the build day.
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(rowForDay[new Date().getDay()]), []);

  return (
    <dl className="hours">
      {site.hours.map((row, i) => (
        <div key={row.days} className={i === today ? 'today' : undefined}>
          <dt>
            {row.days}
            {i === today && <span className="today-tag">Today</span>}
          </dt>
          <dd>{row.time}</dd>
        </div>
      ))}
    </dl>
  );
}
