-- Aula 01/07/2022

-- EXERCÍCIO 1
-- Listar o nome de cada material e o valor médio desse material.
-- Resposta:

SELECT m.id, m.nome, AVG(ioc.valor) AS media
FROM material AS m, item_ordem_compra AS ioc
WHERE m.id = ioc.idMaterial
GROUP BY m.nome
ORDER BY m.id;

-- ***************************************************************************************************************************

-- EXERCÍCIO 2
-- Listar o nome de cada material e o valor médio desse material, entre os dias 10/05/2022 e 13/05/2022.
-- Resposta:

SELECT m.id, m.nome, AVG(ioc.valor) AS media
FROM material AS m, item_ordem_compra AS ioc, ordem_compra AS oc
WHERE m.id = ioc.idMaterial
	AND oc.id = ioc.idOrdemCompra
	AND oc.data BETWEEN '2022-05-10' AND '2022-05-13'
GROUP BY m.nome
ORDER BY m.id;

-- ***************************************************************************************************************************

-- EXERCÍCIO 3
-- Listar todos os materiais em ordem do material mais pedido para o material menos pedido nas ordens de compras.
-- Resposta:

SELECT m.id, m.nome, COUNT(ioc.idMaterial) AS contagem
FROM material AS m, item_ordem_compra AS ioc
WHERE m.id = ioc.idMaterial
GROUP BY ioc.idMaterial
ORDER BY contagem DESC;

-- ***************************************************************************************************************************

UPDATE `material` SET `nome` = 'Prego' WHERE id = 2;

-- ***************************************************************************************************************************

DELETE FROM item_ordem_compra
WHERE item_ordem_compra.idOrdemCompra = 5
	AND item_ordem_compra.idMaterial = 11;

-- ***************************************************************************************************************************

SELECT * FROM item_ordem_compra;

-- ***************************************************************************************************************************

-- DESAFIO MySQL => Fazer um "script.sql" com os exercícios do checkpoint de 27/06/2022 e os exercícios propostos.

-- ***************************************************************************************************************************