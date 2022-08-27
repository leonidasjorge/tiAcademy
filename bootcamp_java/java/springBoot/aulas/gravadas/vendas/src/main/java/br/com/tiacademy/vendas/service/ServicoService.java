package br.com.tiacademy.vendas.service;

import org.springframework.stereotype.Service;

import br.com.tiacademy.vendas.core.crud.CrudService;
import br.com.tiacademy.vendas.domain.Servico;

@Service
public class ServicoService extends CrudService<Servico, Long> {

	@Override
	protected Servico editarEntidade(Servico recuperado, Servico entidade) {
		
		recuperado.setId(entidade.getId());
		recuperado.setNome(entidade.getNome());
		recuperado.setDescricao(entidade.getDescricao());
		
		return recuperado;
	}

}
