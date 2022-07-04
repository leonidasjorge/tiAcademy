package entidades;

public class Veiculo {
	private double capacidade;
	private double consumo;
	private int passageiros;
	
	public Veiculo() {
		
	}

	public Veiculo(double capacidade, double consumo, int passageiros) {
		this.capacidade = capacidade;
		this.consumo = consumo;
		this.passageiros = passageiros;
	}

	public double dividirDespesas(double quilometro, double combustivel) {
		return ((quilometro / capacidade * combustivel) / passageiros);
	}
	
	public double tanqueViagem(double quilometro) {
		return (quilometro / (consumo * capacidade));
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
	
	public String toString() {
		return "\n- Este veículo está com " + passageiros + " passageiro(s)." +
				"\n- A capacidade do tanque de combustível é de " + capacidade + " litros." +
				"\n- Este veículo faz " + consumo + " km/litro.";
	}
}
