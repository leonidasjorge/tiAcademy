package br.com.tiacademy.vendas.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class PedidoDTO implements Serializable {

	private Long id;
	
	private LocalDate data;
	
	private BigDecimal valor;
	
	private Long clienteId;
	private Long vendedorId;
	
	private ClienteDTO cliente;
	private VendedorDTO vendedor;
	
	private List<ItemDTO> itens = new ArrayList<>();
	
}
