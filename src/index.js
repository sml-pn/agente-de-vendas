const links = require('../data/links.json');
const { extrairShopee } = require('./agenteShopee');
const { gerarLegenda } = require('./conteudo');

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function main() {
  const item = randomItem(links);

  console.log("🔎 Buscando produto...\n");

  const produto = await extrairShopee(item.link);

  console.log("📦 Produto encontrado:\n");
  console.log(produto);

  const legenda = gerarLegenda(produto);

  console.log("\n🚀 POST GERADO:\n");
  console.log(legenda);
}

main();
