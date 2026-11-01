// Start Vite first. PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/create-showreel.mjs
import { writeFile } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.goto(process.env.APP_URL || 'http://127.0.0.1:5173');
  const result = await page.evaluate(async () => {
    const { project } = await import('/src/assets/data/project.js');
    const images = await Promise.all(project.map(async item => {
      const image = new Image(); image.src = item.img; await image.decode(); return image;
    }));
    // Shuffle once: deterministic movement returns to the same composition at the loop boundary.
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    const canvas = document.createElement('canvas');
    canvas.width = 1600; canvas.height = 900;
    const ctx = canvas.getContext('2d');
    const duration = 18000;
    const stream = canvas.captureStream(30);
    const mimeType = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8'].find(type => MediaRecorder.isTypeSupported(type));
    if (!mimeType) throw new Error('WebM recording is not supported');
    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 6000000 });
    const chunks = [];
    const finished = new Promise((resolve, reject) => {
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onerror = event => reject(event.error);
      recorder.onstop = resolve;
    });
    function draw(progress) {
      ctx.fillStyle = '#dfdfdb'; ctx.fillRect(0, 0, 1600, 900);
      ctx.save();
      ctx.translate(800, 450);
      ctx.rotate(-.13 + Math.sin(progress * Math.PI * 2) * .018);
      const zoom = 1 + Math.sin(progress * Math.PI * 2) * .035;
      ctx.scale(zoom, zoom);
      // Three independent moving lanes: multiple projects on screen, never a slideshow.
      for (let row = 0; row < 3; row++) {
        const count = row === 2 ? 7 : 6;
        const step = 580;
        const travel = progress * count * step * (row === 1 ? -1 : 1);
        for (let col = -1; col <= count; col++) {
          const index = ((col % count) + count) % count + row * 6;
          const image = images[index];
          const x = ((col * step + travel + count * step * 2) % (count * step)) - 1000;
          const y = (row - 1) * 340 + Math.sin(progress * Math.PI * 2 + row) * 14;
          const width = 548;
          const height = Math.min(310, width * image.height / image.width);
          ctx.save();
          ctx.translate(x, y);
          ctx.shadowColor = '#00000030'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 14;
          ctx.fillStyle = '#f4f4f1'; ctx.fillRect(-width / 2, -height / 2, width, height);
          ctx.shadowColor = 'transparent';
          const ratio = Math.min(width / image.width, height / image.height);
          const w = image.width * ratio, h = image.height * ratio;
          ctx.drawImage(image, -w / 2, -h / 2, w, h);
          ctx.restore();
        }
      }
      ctx.restore();
    }
    draw(0);
    const poster = canvas.toDataURL('image/jpeg', .9).split(',')[1];
    let start;
    function frame(time) {
      start ??= time;
      const elapsed = time - start;
      draw((elapsed % duration) / duration);
      if (elapsed < duration) requestAnimationFrame(frame);
      else recorder.stop();
    }
    recorder.start(); requestAnimationFrame(frame);
    await finished;
    stream.getTracks().forEach(track => track.stop());
    return { bytes: Array.from(new Uint8Array(await new Blob(chunks, { type: 'video/webm' }).arrayBuffer())), poster };
  });
  await writeFile(new URL('../public/project-showreel.webm', import.meta.url), Buffer.from(result.bytes));
  await writeFile(new URL('../public/project-montage.jpg', import.meta.url), Buffer.from(result.poster, 'base64'));
  console.log(`Created text-free 18-second multi-project montage, ${(result.bytes.length / 1024 / 1024).toFixed(1)} MB.`);
} finally { await browser.close(); }
