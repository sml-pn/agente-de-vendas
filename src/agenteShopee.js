const axios = require('axios');
const cheerio = require('cheerio');

async function extrairShopee(link) {
  try {
    const { data } = await axios.get(link, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const $ = cheerio.load(data);

    const nome = $('title').text();

    return {
      nome: nome || 'Produto Shopee',
      preco: 'Veja no link',
      descricao: 'Produto em alta no momento!',
      link
    };

  } catch (error) {
    return {
      nome: 'Erro ao buscar produto',
      preco: 'N/A',
      descricao: 'Não foi possível carregar',
      link
    };
  }
}

module.exports = { extrairShopee };
