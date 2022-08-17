package br.com.tiacademy.vendas.converter;

import org.springframework.stereotype.Component;

import br.com.tiacademy.vendas.core.crud.CrudConverter;
import br.com.tiacademy.vendas.domain.Pedido;
import br.com.tiacademy.vendas.dto.PedidoDTO;

@Component
public class PedidoConverter implements CrudConverter<Pedido, PedidoDTO> {

	@Override
	public PedidoDTO entidadeParaDto(Pedido entidade) {
		return null;
	}

	@Override
	public Pedido dtoParaEntidade(PedidoDTO dto) {
		return null;
	}

}
