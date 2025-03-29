const db  = require('../dataBase/connection');

module.exports = {
    async listarRotas (request, response) {
        try{
            return response.status(200).json({
                sucesso: true,
                mensagem:'Lista de Rotas.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem:'Erro na listagem de rotas.',
                dados: error.message
            });
        }
    }
}