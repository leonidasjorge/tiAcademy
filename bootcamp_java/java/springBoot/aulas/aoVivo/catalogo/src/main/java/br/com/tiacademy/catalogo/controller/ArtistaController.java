package br.com.tiacademy.catalogo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.catalogo.entity.Artista;
import br.com.tiacademy.catalogo.repository.ArtistaRepository;

/*
 * - Verbos "http": Delete, Get, Patch, Post, Put, entre outros.
 * 
 * - Status de Requisição: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
 */

@RestController // 1º Estou dizendo para o Spring Boot que esta classe é o "controller";
@RequestMapping("/artista") // 2º Estou definindo o "recurso"; "a página/diretório" com seu conteúdo;
public class ArtistaController {

	@Autowired
	private ArtistaRepository artistaRepository;
	
	// 3º Esta anotação serve para que o "controller" saiba que este método é o que será chamado no "GET";
	@GetMapping
	public List<Artista> todosArtistas() {		
		return artistaRepository.findAll();
	}

}
