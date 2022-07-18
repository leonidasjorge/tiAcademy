package br.com.tiacademy.vendas.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.vendas.domain.Vendedor;
import br.com.tiacademy.vendas.service.VendedorService;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {
	
	@Autowired
	private VendedorService vendedorService;
	
	@GetMapping
	public ResponseEntity<List<Vendedor>> listar() {
		var vendedores = vendedorService.listar();
		return ResponseEntity.ok(vendedores);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Vendedor> especifico(@PathVariable("id") Long id) {
		
		var resultado = vendedorService.porId(id);
		
		/*
		 * Códigos de status de respostas HTTP
		 * 
		 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
		 */
		
		if (Objects.isNull(resultado)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(resultado);
	}
	
	@PostMapping
	public ResponseEntity<Vendedor> criar(@RequestBody Vendedor vendedor) {
		var salvo = vendedorService.criar(vendedor);
		return ResponseEntity.ok(salvo);
	}

}
