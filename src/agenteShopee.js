const { chromium } = require('playwright');

async function extrairShopee(link) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(link, { waitUntil: 'domcontentloaded' });

  // espera carregar conteúdo
  await page.waitForTimeout(5000);

  const nome = await page.title();

  let preco = "Preço não encontrado";

  try {
    preco = await page.locator('span').first().innerText();
  } catch {}

  await browser.close();

  return {
    nome,
    preco,
    descricao: "Kit completo pra sua casa ou oficina!",
    link
  };
}

module.exports = { extrairShopee };
