package br.com.tiacademy.catalogo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.tiacademy.catalogo.entity.Artista;

@Repository
public interface ArtistaRepository extends RepositoryCatalogo<Artista, Long> {
	
	/* abaixo, 2 endpoint
	 * 
	 * a primeira é HQL é quando faz uma requisição/endpoint
	 * a segunda é SpringData
	 * 
	 */
	@Query(value = "select a from Artista a where a.nome = :nome")
	Artista consultarPeloNome(@Param("nome") String nome);

	Artista findByNome(String nome);
}
