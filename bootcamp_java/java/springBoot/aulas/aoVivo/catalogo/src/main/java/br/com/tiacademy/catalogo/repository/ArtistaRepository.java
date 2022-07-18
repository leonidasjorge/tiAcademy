package br.com.tiacademy.catalogo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.tiacademy.catalogo.entity.Artista;

@Repository
public interface ArtistaRepository extends JpaRepository<Artista, Long> {
	
}
