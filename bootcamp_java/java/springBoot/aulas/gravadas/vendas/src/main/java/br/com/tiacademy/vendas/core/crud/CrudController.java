package br.com.tiacademy.vendas.core.crud;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public abstract class CrudController<T extends CrudDomain<ID>, D, ID> extends ReadController<T, D, ID> {
	
	@PostMapping
	public ResponseEntity<D> criar(@RequestBody D dto) {
		
		converter.dtoParaEntidade(dto);
		
		var entidade = converter.dtoParaEntidade(dto);
		var salvo = service.criar(entidade);
		
		ServletUriComponentsBuilder buider = ServletUriComponentsBuilder.fromCurrentRequest();
		
		var uri = buider.path("/{id}").buildAndExpand(salvo.getId()).toUri();
		
		return ResponseEntity.created(uri).body(converter.entidadeParaDto(salvo));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<D> editar(@PathVariable("id") ID id, @RequestBody D dto) {
		
		var novaEntidade = converter.dtoParaEntidade(dto);
		var salvo = service.editar(id, novaEntidade);
		
		return ResponseEntity.ok(converter.entidadeParaDto(salvo));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluir(@PathVariable("id") ID id) {
		service.excluir(id);
		return ResponseEntity.noContent().build();
	}
}
