const db  = require('../dataBase/connection');

module.exports = {
    async listarPedidos (request, response) {
        try{

            const sql = `
            SELECT 
                ped_id, cli_id, ped_data, ped_status, ped_valor_total 
            FROM PEDIDO;
            `;

            const [row] = await db.query(sql);
            const nItens = row.length;
            
            return response.status(200).json({
                sucesso: true,
                mensagem:'Lista de Pedidos.',
                nItens,
                dados: row
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

            const {Idcliente, data_pedido, ped_status, ped_valor} = request.body;

            const sql = `INSERT INTO PEDIDO
                         (cli_id, ped_data, ped_status, ped_valor_total) 
                         VALUES
                         (?, ?, ?, ?);
                    
                        `;

            const values = [Idcliente, data_pedido, ped_status, ped_valor];

            const [result] = await db.query(sql, values);

            const dados = {
                Idcliente,
                data_pedido,
                ped_status,
                ped_valor
            };

            return response.status(200).json({

                sucesso: true,
                mensagem: 'cadastro de pedidos',
                dados: dados
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
