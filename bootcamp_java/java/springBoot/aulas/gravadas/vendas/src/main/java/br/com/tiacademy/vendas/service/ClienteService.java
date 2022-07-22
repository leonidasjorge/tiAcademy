package br.com.tiacademy.vendas.service;

import org.springframework.stereotype.Service;

import br.com.tiacademy.vendas.core.crud.CrudService;
import br.com.tiacademy.vendas.domain.Cliente;

@Service
public class ClienteService extends CrudService<Cliente, Long> {

	@Override
	protected Cliente editarEntidade(Cliente recuperado, Cliente entidade) {
		recuperado.setNome(entidade.getNome());
		return recuperado;
	}
}
