package entidades;

import java.util.Date;

public class Contrato {
	private Date data;
	private int horas;
	private double valorHora;
	
	public Contrato() {
		
	}

	public Contrato(Date data, int horas, double valorHora) {
		this.data = data;
		this.horas = horas;
		this.valorHora = valorHora;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public int getHoras() {
		return horas;
	}

	public void setHoras(int horas) {
		this.horas = horas;
	}

	public double getValorHora() {
		return valorHora;
	}

	public void setValorHora(double valorHora) {
		this.valorHora = valorHora;
	}
	
	public double valorTotal() {
		return (horas * valorHora);
	}
}
