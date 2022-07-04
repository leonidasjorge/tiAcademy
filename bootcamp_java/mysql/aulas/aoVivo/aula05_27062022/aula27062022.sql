-- Aula 27/06/2022

SELECT nome FROM fornecedor;

-- ***************************************************************************************************************************

SELECT oc.id, oc.data, f.nome, f.ie
FROM fornecedor as f, ordem_compra as oc
WHERE oc.idFornecedor = f.id;

-- ***************************************************************************************************************************

SELECT oc.id, oc.data, f.nome, f.ie
FROM fornecedor as f, ordem_compra as oc
WHERE oc.idFornecedor = f.id
ORDER BY f.ie;

-- ***************************************************************************************************************************

SELECT oc.id, oc.data, f.nome, f.ie
FROM fornecedor as f, ordem_compra as oc
WHERE oc.idFornecedor = f.id
ORDER BY f.ie DESC;

-- ***************************************************************************************************************************

SELECT ioc.idOrdemCompra, ioc.idMaterial, m.nome
FROM item_ordem_compra AS ioc, material as m
WHERE ioc.idMaterial = m.id
ORDER BY ioc.idOrdemCompra;

-- ***************************************************************************************************************************

SELECT *, quantidade * valor AS SubTotal
FROM item_ordem_compra;

-- ***************************************************************************************************************************

SELECT idOrdemCompra, SUM(quantidade * valor) AS totalCompra
FROM item_ordem_compra
GROUP BY idOrdemCompra;

-- ***************************************************************************************************************************

SELECT idOrdemCompra, SUM(quantidade * valor) AS totalCompra
FROM item_ordem_compra
GROUP BY idOrdemCompra
HAVING totalCompra > 5000;

-- ***************************************************************************************************************************
-- ***************************************************************************************************************************

-- EXERCÍCIO 1
-- Exiba os dados da compra (item_ordem_compra) de todos os materiais cujo a quantidade seja maior que 10.
-- Resposta:

SELECT *
FROM item_ordem_compra
WHERE quantidade > 10;

-- ***************************************************************************************************************************

-- EXERCÍCIO 2
-- Exiba os dados da compra (item_ordem_compra) de todos os materiais cujo valor seja menor que 50.
-- Resposta:

SELECT *
FROM item_ordem_compra
WHERE valor < 50.00;

-- ***************************************************************************************************************************

-- EXERCÍCIO 3
-- Exiba os dados da compra (item_ordem_compra) de todos os materiais cuja quantidade seja maior que 10, e, cujo valor seja menor que 50.
-- Resposta:

SELECT *
FROM item_ordem_compra
WHERE quantidade > 10 AND valor < 50.00;

-- ***************************************************************************************************************************

-- EXERCÍCIO 4
-- Exiba os dados da compra de todos os materiais cuja quantidade seja maior que 100, e, cujo valor seja menor que 50, contendo o nome do material e o nome do fornecedor.
-- Resposta:

SELECT ioc.idOrdemCompra, ioc.idMaterial, m.nome, f.nome, ioc.valor, ioc.quantidade
FROM item_ordem_compra AS ioc, material AS m, fornecedor AS f, ordem_compra AS oc
WHERE ioc.quantidade > 100
    AND ioc.valor < 50.00
    AND ioc.idMaterial = m.id
    AND oc.id = f.id;

-- ***************************************************************************************************************************

-- EXERCÍCIO 5
-- Exiba o subtotal de cada material vendido, o nome do material, e, o nome do fornecedor para cada "item_ordem_compra".
-- Resposta:

SELECT ioc.idOrdemCompra, ioc.idMaterial, m.nome, f.nome, ioc.valor, ioc.quantidade, ioc.quantidade * ioc.valor AS SubTotal
FROM item_ordem_compra AS ioc, material AS m, fornecedor AS f, ordem_compra AS oc
WHERE ioc.idMaterial = m.id
    AND f.id = oc.idFornecedor
    AND oc.id = ioc.idOrdemCompra
ORDER by ioc.idOrdemCompra;

-- ***************************************************************************************************************************

-- EXERCÍCIO 6
-- Exiba o total vendido em cada "item_ordem_compra".
-- Resposta:

SELECT idOrdemCompra, SUM(quantidade * valor) AS totalCompra
FROM item_ordem_compra
GROUP BY idOrdemCompra;

-- ***************************************************************************************************************************

-- EXERCÍCIO 7
-- Exiba o nome do fornecedor da ordem de compra, a ordem de compra, e, o total pago pela ordem de compra.
-- Resposta:

SELECT oc.data, f.nome, oc.id, SUM(quantidade * valor) AS total
FROM ordem_compra AS oc, item_ordem_compra AS ioc, fornecedor AS f
WHERE f.id = oc.idFornecedor
	AND oc.id = ioc.idOrdemCompra
GROUP BY ioc.idOrdemCompra;

-- ***************************************************************************************************************************

-- EXERCÍCIO 8
-- Exiba o nome do fornecedor da ordem de compra, a ordem de compra, e, o total pago pela ordem de compra, num determinado intervalo.
-- Resposta:

SELECT oc.data, f.nome, oc.id, SUM(quantidade * valor) AS total
FROM ordem_compra AS oc, item_ordem_compra AS ioc, fornecedor AS f
WHERE f.id = oc.idFornecedor
	AND oc.id = ioc.idOrdemCompra
	AND oc.data BETWEEN '2022-05-15' AND '2022-05-20'
GROUP BY ioc.idOrdemCompra;

-- ***************************************************************************************************************************
