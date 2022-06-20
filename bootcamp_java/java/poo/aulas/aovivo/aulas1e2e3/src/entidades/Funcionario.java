package entidades;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import entidades.enums.Nivel;

public class Funcionario {
	private Nivel nivel;
	private String nome;
	private double salarioBase;	
	private Departamento departamento;
	private List <Contrato> contratos = new ArrayList <> ();
	
	public Funcionario() {
		
	}

	public Funcionario(Nivel nivel, String nome, double salarioBase, Departamento departamento) {
		this.nivel = nivel;
		this.nome = nome;
		this.salarioBase = salarioBase;
		this.departamento = departamento;
	}

	public Nivel getNivel() {
		return nivel;
	}

	public void setNivel(Nivel nivel) {
		this.nivel = nivel;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getSalarioBase() {
		return salarioBase;
	}

	public void setSalarioBase(double salarioBase) {
		this.salarioBase = salarioBase;
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public List<Contrato> getContratos() {
		return contratos;
	}

	/*public void setContratos(List<Contrato> contratos) {
		this.contratos = contratos;
	}*/
	
	public void adicionarContrato(Contrato contrato) {
		contratos.add(contrato);
	}

	public void removerContrato(Contrato contrato) {
		contratos.remove(contrato);
	}
	
	public double ganho(int ano, int mes) {
		double soma = salarioBase;
		
		Calendar calendario = Calendar.getInstance();
		
		for (Contrato contrato : contratos) {
			calendario.setTime(contrato.getData());
			
			int anoContrato = calendario.get(Calendar.YEAR);
			int mesContrato = calendario.get(Calendar.MONTH);
			
			if ((ano == anoContrato) && (mes == mesContrato)) {
				soma += contrato.valorTotal();
			}
		}
		
		return soma;
	}
}