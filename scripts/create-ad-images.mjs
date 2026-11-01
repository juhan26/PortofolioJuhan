// PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/create-ad-images.mjs
import { mkdir, writeFile } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.goto(process.env.APP_URL || 'http://127.0.0.1:5173');
  const files = await page.evaluate(async () => {
    await document.fonts.ready;
    const images = await Promise.all(['mtrinjani', 'vertura'].map(async name => {
      const img = new Image(); img.src = `/src/assets/${name}.png`; await img.decode(); return img;
    }));
    return [628, 1200].map(height => {
      const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = height;
      const ctx = canvas.getContext('2d');
      const square = height === 1200;
      ctx.fillStyle = '#e3e3e1'; ctx.fillRect(0, 0, 1200, height);
      function text(value, x, y, size, weight = 500, color = '#131314') {
        ctx.fillStyle = color; ctx.font = `${weight} ${size}px Inter, sans-serif`; ctx.fillText(value, x, y);
      }
      function card(image, x, y, width, boxHeight, angle = 0) {
        ctx.save(); ctx.translate(x + width / 2, y + boxHeight / 2); ctx.rotate(angle);
        ctx.shadowColor = '#182c3526'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 12;
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.roundRect(-width / 2, -boxHeight / 2, width, boxHeight, 10); ctx.fill();
        ctx.shadowColor = 'transparent';
        ctx.beginPath(); ctx.roundRect(-width / 2, -boxHeight / 2, width, boxHeight, 10); ctx.clip();
        const scale = Math.min(width / image.width, boxHeight / image.height);
        const w = image.width * scale, h = image.height * scale;
        ctx.drawImage(image, -w / 2, -h / 2, w, h); ctx.restore();
      }
      text('ju.', 64, 89, 48, 700);
      text('JUHANDA.COM', 154, 79, 18, 600, '#525651');
      if (square) {
        text('Website yang', 64, 226, 78, 600);
        text('bikin usaha kamu', 64, 316, 78, 600);
        text('lebih dikenal.', 64, 406, 78, 600);
        text('Dibuat sesuai kebutuhan. Diskusi langsung dengan developer.', 68, 464, 24, 400, '#555953');
        card(images[0], 85, 540, 720, 405, -.035);
        card(images[1], 440, 750, 670, 335, .045);
        text('JASA PEMBUATAN WEBSITE', 64, 1150, 17, 600, '#525651');
        text('Lombok, Indonesia', 915, 1150, 17, 400, '#525651');
      } else {
        text('Website untuk', 64, 226, 62, 600);
        text('usaha kamu.', 64, 300, 62, 600);
        text('Desain sesuai kebutuhan.', 67, 359, 23, 400, '#555953');
        text('Langsung dengan developernya.', 67, 394, 23, 400, '#555953');
        card(images[0], 595, 125, 530, 298, -.035);
        card(images[1], 773, 340, 338, 190, .045);
        text('JASA PEMBUATAN WEBSITE', 64, 554, 17, 600, '#525651');
        text('Lombok, Indonesia', 64, 584, 17, 400, '#525651');
      }
      return { name: square ? 'juhanda-google-ads-square-1200x1200.jpg' : 'juhanda-google-ads-landscape-1200x628.jpg', data: canvas.toDataURL('image/jpeg', .95).split(',')[1] };
    });
  });
  const directory = new URL('../exports/google-ads/', import.meta.url);
  await mkdir(directory, { recursive: true });
  for (const file of files) {
    const buffer = Buffer.from(file.data, 'base64');
    if (buffer.length > 5120000) throw new Error('Image exceeds 5 MB');
    await writeFile(new URL(file.name, directory), buffer);
    console.log(`${file.name}: ${(buffer.length / 1024).toFixed(0)} KB`);
  }
} finally { await browser.close(); }
