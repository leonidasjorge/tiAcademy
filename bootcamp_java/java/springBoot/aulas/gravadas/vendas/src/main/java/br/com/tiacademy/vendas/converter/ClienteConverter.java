package br.com.tiacademy.vendas.converter;

import org.springframework.stereotype.Component;

import br.com.tiacademy.vendas.core.crud.CrudConverter;
import br.com.tiacademy.vendas.domain.Cliente;
import br.com.tiacademy.vendas.dto.ClienteDTO;

@Component
public class ClienteConverter implements CrudConverter<Cliente, ClienteDTO> {

	@Override
	public ClienteDTO entidadeParaDto(Cliente entidade) {
		return new ClienteDTO(entidade.getId(), entidade.getNome());
	}

	@Override
	public Cliente dtoParaEntidade(ClienteDTO dto) {
		return new Cliente(dto.getId(), dto.getNome());
	}

}
