package br.com.tiacademy.vendas.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class ServicoDTO implements Serializable {

	private Long id;
	
	private String nome;
	private String descricacao;
	
}
