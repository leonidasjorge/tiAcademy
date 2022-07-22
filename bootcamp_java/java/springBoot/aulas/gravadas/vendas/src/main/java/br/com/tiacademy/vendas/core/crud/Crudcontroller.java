package br.com.tiacademy.vendas.core.crud;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public abstract class Crudcontroller<T, ID> {
	
	@Autowired
	protected CrudService<T, ID> service;
	
	@GetMapping
	public ResponseEntity<List<T>> listar() {
		var listaEntidade = service.listar();
		return ResponseEntity.ok(listaEntidade);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<T> especifico(@PathVariable("id") ID id) {
		
		var especifico = service.porId(id);
		
		if (Objects.isNull(especifico)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(especifico);
	}
	
	@PostMapping
	public ResponseEntity<T> criar(@RequestBody T entidade) {
		var salvo = service.criar(entidade);
		return ResponseEntity.ok(salvo);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<T> editar(@PathVariable("id") ID id, @RequestBody T entidade) {
		return ResponseEntity.ok(service.editar(id, entidade));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluir(@PathVariable("id") ID id) {
		service.excluir(id);
		return ResponseEntity.ok().build();
	}
}
