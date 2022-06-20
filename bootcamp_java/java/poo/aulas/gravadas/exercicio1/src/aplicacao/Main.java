package aplicacao;

import java.util.Scanner;

import entidades.Veiculo;

public class Main {
	public static void main(String[] args) {
		
		/*
		 * EXERCÍCIO 1
		 * 
		 * Veja a classe a seguir:
		 * 
		 * Nome da Classe: Veiculo
		 * 
		 * Atributos:
		 * - capacidade : double
		 * - passageiro : double
		 * - consumo    : double
		 * 
		 * Métodos:
		 * + tanqueViagem(quilometro : double) : double
		 * + dividirDespesas(combustivel : double) : double
		 * 
		 * Obs.:
		 * - Considere que o atributo "capacidade" corresponde ao tanque de combustível do veículo, e,
		 * o consumo é definido por KM/Litro.
		 * 
		 * Implemente a classe "Veiculo" conforme especificado no diagrama de classes.
		 * 
		 * Implemente a classe principal e instancie 2 veículos:
		 * 
		 * - Veículo 1:
		 * -- Capacidade: 90 litros;
		 * -- Passageiro: 16 pessoas;
		 * -- Consumo: 9 KM/Litro;
		 * 
		 * - Veículo 2:
		 * -- Capacidade: 56 litros;
		 * -- Passageiro: 5 pessoas;
		 * -- Consumo: 9 KM/Litro;
		 * 
		 * NOTA: Considere uma viagem de Maringá a Blumenau (628 KM);
		 */
		
		Scanner sc = new Scanner(System.in);
		
		double consumo, km, tanque, valor;
		int pas;

		System.out.println("- Quantidade de passageiros: ");
		pas = sc.nextInt();
		System.out.println("Capacidade do Tanque: ");
		tanque = sc.nextDouble();
		System.out.println("Consumo por Litro: ");
		consumo = sc.nextDouble();
		System.out.println("Distância em KM: ");
		km = sc.nextDouble();
		System.out.println("Valor do Combustível: R$");
		valor = sc.nextDouble();
		
		Veiculo gurgel = new Veiculo(tanque, consumo, pas);
		System.out.println(gurgel.toString());
		
		double tanques = gurgel.tanqueViagem(km);
		double rateio  = gurgel.dividirDespesas(km, valor);
		
		System.out.printf("Para a viagem, será necesário %.1f tanques de combustível, e, " +
				"cada passageiro contribuirá com R$ %.2f.", tanques, rateio);
		
		sc.close();
	}
}
