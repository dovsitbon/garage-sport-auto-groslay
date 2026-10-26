// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const chakra = font('node_modules/@fontsource/chakra-petch/files/chakra-petch-latin-700-normal.woff2');
const rh = font('node_modules/@fontsource-variable/red-hat-text/files/red-hat-text-latin-wght-normal.woff2');
const css = `@font-face{font-family:C;src:url(${chakra})}@font-face{font-family:R;src:url(${rh})}
*{margin:0;box-sizing:border-box}body{background:#fff;color:#2a2d31;font-family:R}`;

const og = `<style>${css}
.w{width:1200px;height:630px;display:grid;grid-template-columns:1.25fr 1fr;gap:56px;align-items:center;padding:56px 64px;
background-image:linear-gradient(rgba(61,110,158,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(61,110,158,.10) 1px,transparent 1px);background-size:30px 30px}
.a{font-family:C;color:#ae4510;font-size:26px}
h1{font-family:C;font-size:72px;line-height:1;margin-top:14px}
.s{margin-top:24px;font-size:28px}
.n{margin-top:28px;font-family:C;font-size:30px}
.f{position:relative;background:#fff;border:3px solid #2a2d31}
.f:before{content:'';position:absolute;inset:-3px;transform:translate(12px,12px);background:#e1e6ea;border:3px solid #8fa8c2;z-index:-1}
.h{font-family:C;font-size:32px;padding:18px 24px;border-bottom:3px solid #2a2d31}
.r{padding:18px 24px;border-bottom:3px solid #2a2d31;font-size:26px;display:flex;gap:22px;flex-wrap:wrap}
.r span{display:flex;align-items:center;gap:10px;font-weight:600}
.r i{width:26px;height:26px;border:3px solid #2a2d31;display:inline-block;position:relative}
.r i:after{content:'';position:absolute;left:5px;top:-6px;width:10px;height:20px;border:solid #e2601b;border-width:0 5px 5px 0;transform:rotate(40deg)}
.c{padding:18px 24px 24px;font-size:25px;line-height:1.35}
.c b{display:block;font-family:C;font-size:18px;color:#565a61;margin-bottom:6px}
.p{background:#2a2d31;color:#fff;padding:12px 24px;font-size:21px}
</style><div class="w"><div><p class="a">24 rue de la Station, Groslay</p>
<h1>Garage Sport Auto</h1><p class="s">Mécanique, carrosserie, peinture. Toutes marques.</p>
<p class="n">4,3/5 sur 43 avis Google</p></div>
<div class="f"><p class="h">Fiche d'intervention</p><p class="r"><span><i></i>Mécanique</span><span><i></i>Carrosserie</span><span><i></i>Peinture</span></p>
<p class="c"><b>Constat</b>On ne change que ce qui doit l'être.</p><p class="p">Tél. 09 83 98 32 98</p></div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#e2601b;display:grid;place-items:center}</style>
<svg width="180" height="180" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8.5" fill="none" stroke="#1a1c1f" stroke-width="3.2"/><path d="M16 2v7M16 23v7M2 16h7M23 16h7" stroke="#1a1c1f" stroke-width="3.2"/></svg>`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(200);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
