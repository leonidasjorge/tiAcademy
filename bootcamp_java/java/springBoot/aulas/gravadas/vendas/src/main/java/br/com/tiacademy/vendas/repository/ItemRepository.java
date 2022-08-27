package br.com.tiacademy.vendas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.tiacademy.vendas.core.crud.CrudRepository;
import br.com.tiacademy.vendas.domain.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {

	// Query HQL
	@Query("select i from Item i where i.id in (:ids)")
	List<Item> recuperarPorIds(@Param("ids") List<Long> ids);
	
	// Query Nativa
	@Query(nativeQuery = true, value = "select * from item where id in (:ids)")
	List<Item> recuperarPorIdsNativo(@Param("ids") List<Long> ids);
	
	// Query Spring Data
	List<Item> findByIdIn(List<Long> ids);
	
}
