SELECT emp_id, emp_nome, emp_cnpj, emp_cel, emp_end FROM EMPRESA;
SELECT cont_id, emp_id, cont_tipo, cont_desc FROM CONTATO;
SELECT cat_id, cat_nome, cat_desc FROM CATEGORIA;
SELECT prod_id, emp_id, cat_id, prod_nome, prod_desc, prod_est, prod_preco FROM PRODUTOS;
SELECT usu_id, emp_id, usu_nome, usu_email, usu_senha FROM USUARIOS;
SELECT cli_id, emp_id, cli_nome, cli_email, cli_cel, cli_end FROM CLIENTE;
SELECT rot_id, cli_id, rot_des, rot_dist, rot_data FROM ROTAS;
SELECT ped_id, cli_id, ped_data, ped_status, ped_valor_total FROM PEDIDO;
SELECT mens_id, ped_id, mens_data_envio, mens_status FROM MENSAGEM;
SELECT pedpro_id, prod_id, ped_id, pedpro_preco_unit, pedpro_quant FROM PEDIDO_PRODUTO;
SELECT pag_id, ped_id, pag_metodo, pag_data, pag_status FROM PAGAMENTO