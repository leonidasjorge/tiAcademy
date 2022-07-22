package br.com.tiacademy.catalogo.repository;

import org.springframework.stereotype.Repository;

import br.com.tiacademy.catalogo.entity.Gravadora;

@Repository
public interface GravadoraRepository extends RepositoryCatalogo<Gravadora, Long> {
	
}
