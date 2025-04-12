const db  = require('../dataBase/connection');

module.exports = {
    async listarClientes (request, response) {
        try{

            const sql = `SELECT
                            cli_id, emp_id, cli_nome, cli_email, cli_cel, cli_end 
                        FROM CLIENTE;`;
            
            const [row] = await db.query(sql);
            const nItens = row.length;

            return response.status(200).json({
                sucesso: true,
                mensagem:'Lista de Clientes.',
                nItens,
                dados: row
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem:'Erro na listagem de clientes.',
                dados: error.message
            });
        }
    },


    async cadastrarClientes(request, response) {
        try {
            return response.status(200).json({

                sucesso: true,
                mensagem: 'cadastro de clientes',
                dados: null
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'erro no cadastro de clientes',
                dados: error.message
            });
        }
    },

    async editarClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'editar cliente',
                dados:null,
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'erro ao editar Cliente',
                dados: error.message
            });
        }
    },

    async apagarClientes(request, response) {
        try{
            return response.status(200).json({
                sucesso: true,
                mensagem: 'apagar cliente',
                dados: null,
            });
        }
        catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem:'erro ao apagar cliente',
                dados: error.message,
            })

        }
    }




}