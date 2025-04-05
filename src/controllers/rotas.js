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
    },


    async cadastrarRotas(request, response) {
        try {
            return response.status(200).json({

                sucesso: true,
                mensagem: 'cadastro de rotas',
                dados: null
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'erro no cadastro de rotas',
                dados: error.message
            });
        }
    },

    async editarRotas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'editar rota',
                dados:null,
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'erro ao editar Rota',
                dados: error.message
            });
        }
    },

    async apagarRotas(request, response) {
        try{
            return response.status(200).json({
                sucesso: true,
                mensagem: 'apagar rota',
                dados: null,
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem:'erro ao apagar rota',
                dados: error.message,
            })

        }
    }




}