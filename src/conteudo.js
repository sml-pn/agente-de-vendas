function gerarLegenda(produto) {
  return `
🚨 OLHA ISSO!

${produto.nome}

${produto.descricao}

💰 Apenas R$${produto.preco}

👉 Quer comprar? Acesse o link:
${produto.link}
`;
}

module.exports = { gerarLegenda };
