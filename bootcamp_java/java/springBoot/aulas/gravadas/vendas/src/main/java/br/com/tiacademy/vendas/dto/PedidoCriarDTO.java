package br.com.tiacademy.vendas.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class PedidoCriarDTO {
	
	private Long clienteId;
	private Long vendedorId;
	
	private List<ItemPedidoDTO> itens = new ArrayList<>();
	
}
