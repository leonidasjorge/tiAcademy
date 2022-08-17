package br.com.tiacademy.catalogo.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class GravadoraDTO implements Serializable {
	
	private Long id;
	private String nome;
	private Integer ano;
	private String cidade;
	private String uf;
	private List<ArtistaDTO> artistas = new ArrayList<>();
	
}
