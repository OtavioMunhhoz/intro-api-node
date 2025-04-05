const db  = require('../dataBase/connection');

module.exports = {
    async listarPedidos (request, response) {
        try{
            return response.status(200).json({
                sucesso: true,
                mensagem:'Lista de Pedidos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem:'Erro na listagem de pedidos.',
                dados: error.message
            });
        }
    },


    async cadastrarPedidos(request, response) {
        try {
            return response.status(200).json({

                sucesso: true,
                mensagem: 'cadastro de pedidos',
                dados: null
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'erro no cadastro de pedidos',
                dados: error.message
            });
        }
    },

    async editarPedidos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'editar pedido',
                dados:null,
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'erro ao editar pedido',
                dados: error.message
            });
        }
    },

    async apagarPedidos(request, response) {
        try{
            return response.status(200).json({
                sucesso: true,
                mensagem: 'apagar pedido',
                dados: null,
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem:'erro ao apagar pedido',
                dados: error.message,
            })

        }
    }




}
