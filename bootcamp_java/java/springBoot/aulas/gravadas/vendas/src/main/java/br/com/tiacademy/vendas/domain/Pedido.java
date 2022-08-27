package br.com.tiacademy.vendas.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import br.com.tiacademy.vendas.core.crud.CrudDomain;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@Entity
@NoArgsConstructor
public class Pedido implements CrudDomain<Long>, Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private LocalDate data;
	
	private BigDecimal valor;
	
	@ManyToOne
	@JoinColumn(name = "vendedor_id", referencedColumnName = "id")
	private Vendedor vendedor;
	
	@ManyToOne
	@JoinColumn(name = "cliente_id", referencedColumnName = "id")
	private Cliente cliente;
	
	@ManyToMany
	@JoinTable(name = "item_pedido",
			   joinColumns = @JoinColumn(name = "pedido_id"),
			   inverseJoinColumns = @JoinColumn(name = "item_id"))
	private List<Item> itens = new ArrayList<Item>();
	
}
