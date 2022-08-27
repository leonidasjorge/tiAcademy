package br.com.tiacademy.vendas.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.tiacademy.vendas.core.crud.CrudService;
import br.com.tiacademy.vendas.domain.Pedido;
import br.com.tiacademy.vendas.dto.ItemPedidoDTO;
import br.com.tiacademy.vendas.dto.PedidoCriarDTO;
import br.com.tiacademy.vendas.repository.ItemRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PedidoService extends CrudService<Pedido, Long> {

	private final ItemRepository itemRepository;
	
	public Pedido criarPedido(Pedido pedido, PedidoCriarDTO dto) {
		
		var ids = dto.getItens().stream().map(ItemPedidoDTO::getId).collect(Collectors.toList());
		
		var itens = itemRepository.findByIdIn(ids);
		
		var valorTotal = itens.stream()
						   .map(item -> item.getValor().multiply(BigDecimal.valueOf(item.getQuantidade())))
						   .reduce(BigDecimal::add)
						   .orElse(BigDecimal.ZERO);
		
		pedido.setData(LocalDate.now());
		pedido.setValor(valorTotal);
		
		pedido.getItens().addAll(itens);
		
		return super.criar(pedido);
	}
	
	@Override
	protected Pedido editarEntidade(Pedido recuperado, Pedido entidade) {
		
		recuperado.setId(entidade.getId());
		recuperado.setValor(entidade.getValor());
		recuperado.setData(entidade.getData());
		
		recuperado.setCliente(entidade.getCliente());
		recuperado.setVendedor(entidade.getVendedor());
		
		recuperado.getItens().clear();
		recuperado.getItens().addAll(entidade.getItens());
		
		return recuperado;
	}

}
