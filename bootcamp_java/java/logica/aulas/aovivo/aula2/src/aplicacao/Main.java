package aplicacao;

import java.util.Locale;
import java.util.Scanner;

import entidades.Veiculo;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(new Locale("pt", "BR"));
		
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
		
		System.out.printf("Para a viagem, vamos precisar de %.1f, e, cada passageiro contribuirá com R$ %.2f.", tanques, rateio);
		
		sc.close();
	}
}
