package entidades;

public class Departamento {
	// Atributo "privado";
	private String nome;
	
	// Método Construtor SEM Argumentos;
	public Departamento() {
		
	}

	// Método Construtor COM Argumentos (1 argumento "nome");
	public Departamento(String nome) {
		// O nome à direita do "igual", refere-se ao parâmetro;
		// O nome à esquerda do "igual", refere-se a variável criada;
		this.nome = nome;
	}

	// Método "get" serve para "buscar" informações;
	public String getNome() {
		return nome;
	}

	// Método "set" serve para realizar ações (incluir, alterar, entre outros);
	public void setNome(String nome) {
		this.nome = nome;
	}
	
}
