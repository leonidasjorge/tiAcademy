package br.com.tiacademy.vendas.dto;

import java.math.BigDecimal;

import br.com.tiacademy.vendas.domain.Servico;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class ItemDTO {

	private Long id;
	
	private Integer quantidade;
	
	private BigDecimal valor;
	
	private ServicoDTO servico;
	
	private Long servicoId;
	
}
