import type { NextConfig } from 'next';
// Static export: the whole site is plain HTML/CSS, so it can be hosted on
// Vercel or any static host.
const config: NextConfig = { output: 'export', images: { unoptimized: true } };
export default config;
