package aplicacao;

import java.util.Scanner;

import entidades.Veiculo;

public class Main {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int pass;
		double capacidade, consumo, km, valorCombustivel;
		
		System.out.println("- Informe a quantidade de passageiros:");
		pass = sc.nextInt();
		System.out.println("- Informe a capacidade do tanque do veículo:");
		capacidade = sc.nextDouble();
		System.out.println("- Informe o consumo por litro:");
		consumo = sc.nextDouble();
		System.out.println("- Informe a distância a ser percorrida em KM:");
		km = sc.nextDouble();
		System.out.println("- Informe o valor do litro do combustível:");
		valorCombustivel = sc.nextDouble();
		
		Veiculo v = new Veiculo(capacidade, consumo, pass);
		
		// Dados do Veículo
		System.out.println(v.toString());
		
		// Tanques necessários para a viagem
		double tanques = v.tanqueViagem(km);
		
		// Valor que cada passageiro irá pagar
		double rateio  = v.dividirDespesas(km, valorCombustivel);
		
		System.out.printf("\nPara esta viagem, será necessário %.1f tanque(s) de combustível, e, " +
							"cada passageiro contribuirá com R$ %.2f.", tanques, rateio);
		
		sc.close();
	}

}
