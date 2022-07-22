package br.com.tiacademy.catalogo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.tiacademy.catalogo.repository.RepositoryCatalogo;

public abstract class ControllerCatalogo<T, ID> {

	@Autowired
	protected RepositoryCatalogo<T, ID> repository;
	
	@GetMapping
	public List<T> lista() {
		return repository.findAll();
	}
	
}
