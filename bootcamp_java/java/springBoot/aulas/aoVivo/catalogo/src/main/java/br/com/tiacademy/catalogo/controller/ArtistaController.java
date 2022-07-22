package br.com.tiacademy.catalogo.controller;

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
public class ArtistaController extends ControllerCatalogo<Artista, Long>{

	public ArtistaRepository getRepository() {
		return (ArtistaRepository) this.repository;
	}
	
	@GetMapping("/gil")
	public Artista artistaGil() {
		return this.getRepository().consultarPeloNome("Gilberto Gil");
	}
	
	@GetMapping("/djavan")
	public Artista artistaDjavan() {
		return this.getRepository().consultarPeloNome("Djavan");
	}	
}
