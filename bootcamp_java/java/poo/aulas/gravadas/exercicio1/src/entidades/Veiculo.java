package entidades;

public class Veiculo {
	private double capacidade;
	private double consumo;
	private int passageiros;
	
	public Veiculo(double ca, double co, int p) {
		passageiros = p;
		capacidade  = ca;
		consumo     = co;
	}
	
	public double getCapacidade() {
		return capacidade;
	}
	public void setCapacidade(double capacidade) {
		this.capacidade = capacidade;
	}
	public double getConsumo() {
		return consumo;
	}
	public void setConsumo(double consumo) {
		this.consumo = consumo;
	}
	public int getPassageiros() {
		return passageiros;
	}
	public void setPassageiros(int passageiros) {
		this.passageiros = passageiros;
	}
	
	public double dividirDespesas(double quilometro, double combustivel) {
		 return (quilometro/capacidade*combustivel)/passageiros;
	}
	
	public double tanqueViagem(double quilometro) {
		return (quilometro / (consumo * capacidade));
	}	
	
	public String toString() {
		return "\nO veículo está com " + passageiros 
				+ " pessoa(s); o tanque tem capacidade de " + capacidade 
				+ " litros de combustível, e, faz " + consumo
				+ " KM/Litro.";
	}
}
