package br.com.tiacademy.catalogo.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class ArtistaDTO implements Serializable {

	private Long id;
	private String nome;
}
