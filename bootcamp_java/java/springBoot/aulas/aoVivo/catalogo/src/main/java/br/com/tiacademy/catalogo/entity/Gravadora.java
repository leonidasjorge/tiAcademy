package br.com.tiacademy.catalogo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@Entity
@NoArgsConstructor
public class Gravadora {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	private Integer ano;
	private String cidade;
	private String uf;
	
	@OneToMany(mappedBy = "gravadora")
	private List<Artista> artistas = new ArrayList<Artista>();
	
	@Transient
	public Integer getCountArtistas() {
		return artistas.size();
	}
	
}
