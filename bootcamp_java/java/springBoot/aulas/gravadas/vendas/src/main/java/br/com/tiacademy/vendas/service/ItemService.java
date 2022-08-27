package br.com.tiacademy.vendas.service;

import org.springframework.stereotype.Service;

import br.com.tiacademy.vendas.core.crud.CrudService;
import br.com.tiacademy.vendas.domain.Item;

@Service
public class ItemService extends CrudService<Item, Long> {

	@Override
	protected Item editarEntidade(Item recuperado, Item entidade) {
		return null;
	}

}
