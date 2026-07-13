const https = require('https');

const DECORATIONS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3d:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

function checkUrl(name, url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`${name}: HTTP Status Code ${res.statusCode}`);
      resolve();
    }).on('error', (err) => {
      console.error(`${name}: Error ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  for (const [name, url] of Object.entries(DECORATIONS)) {
    await checkUrl(name, url);
  }
}

main();
