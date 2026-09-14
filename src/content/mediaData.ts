export const partnerLogos = [
  { name: 'Coca-Cola', src: '/assets/partner-logo-1.svg' },
  { name: 'Jacob & Co Genève', src: '/assets/partner-logo-2.svg' },
  { name: 'Rolex', src: '/assets/partner-logo-3.svg' },
  { name: 'Changer mes verres', src: '/assets/partner-logo-4.svg' },
  { name: 'ATA Tablacasa', src: '/assets/partner-logo-5.svg' },
  { name: 'LA29', src: '/assets/LA29_Logo.svg' },
  { name: 'Next NRG', src: '/assets/Next NRG.svg' },
  { name: 'The Only One', src: '/assets/The_Only_One_Logo.svg' },
  { name: 'Diméo', src: '/assets/Diméo_logo.svg' },
] as const;

export const demos = [
  { id: 'calisson', name: 'Calisson Chair', thumbnail: '/assets/Calisson_chair_VoK0hqZ5pzQRHWsSupFCs.webp', url: 'https://cdn.soft8soft.com/AROAJSY2GOEHMOFUVPIOE:e577ee4a7d/Tablacasa-Chaise-Calisson%20-%20API/Tablacasa-Chaise-Calisson.html?hideprice', categories: ['configurator'] },
  { id: 'omega-speedmaster', name: 'Omega Speedmaster', thumbnail: '/assets/omega_speedmaster_picture.webp', url: 'https://omega-speedmaster-3d.vercel.app/', categories: ['viewer'] },
  { id: 'diamond-ring', name: 'Blue Diamond Ring', thumbnail: '/assets/blue_diamond_ring_1_-hZ-SqAWcAXdufX_Sfip5.webp', url: 'https://blue-diamond-ring-configurator.vercel.app/', categories: ['configurator'] },
  { id: 'birkin', name: 'Hermès Birkin', thumbnail: '/assets/hermess_birkin_QEx75WCnZvp13vAawtgY5.webp', url: 'https://hermes-birkin.vercel.app', categories: ['configurator'] },
  { id: 'firenze', name: 'Firenze Sofa', thumbnail: '/assets/firenze_sofa_4airUV4Phx-Aq4w-CxqzQ.webp', url: 'https://mf-international-firenze.vercel.app/', categories: ['configurator', 'ar'] },
  { id: 'cloudflyer', name: 'Cloudflyer 4', thumbnail: '/assets/cloudflyer-4__xbgRx9gM_rtcjhIQsSbi.webp', url: 'https://cloudflyer-4.vercel.app/', categories: ['viewer', 'ar'] },
  { id: 'carter-fly-protect-w', name: 'Carter Fly Protect W', thumbnail: '/assets/No Name - Carter Fly Protect W - cover.webp', url: 'https://carter-fly-protect-w.vercel.app/', categories: ['viewer'] },
] as const;

export type DemoId = (typeof demos)[number]['id'];
export type DemoCategory = 'viewer' | 'configurator' | 'ar';
export type DemoFilter = 'all' | DemoCategory;

