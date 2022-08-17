package br.com.tiacademy.catalogo.service;

import br.com.tiacademy.catalogo.emun.Categoria;

public class EtiquetaService {

	public String gerarEtiqueta(Categoria categoria) {
		
		return String.format("%s23456789", categoria.getPrefixo());
	}
	
}
