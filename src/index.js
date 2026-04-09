const { extrairShopee } = require('./agenteShopee');
const { gerarPost } = require('./conteudo');

async function rodarAgente() {
  console.log("🤖 Agente iniciado...");

  while (true) {
    try {
      console.log("\n🔎 Buscando produto...\n");

      const produto = await extrairShopee();

      console.log("📦 Produto encontrado:\n");
      console.log(produto);

      const post = gerarPost(produto);

      console.log("\n🚀 POST GERADO:\n");
      console.log(post);

    } catch (erro) {
      console.log("❌ Erro:", erro.message);
    }

    // espera 1 hora antes de rodar de novo
    await new Promise(resolve => setTimeout(resolve, 60 * 60 * 1000));
  }
}

rodarAgente();