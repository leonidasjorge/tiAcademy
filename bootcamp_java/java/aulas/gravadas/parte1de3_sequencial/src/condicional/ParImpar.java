package condicional;

import java.util.Scanner;

public class ParImpar {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int num;
		String resultado;
		
		System.out.println("Informe um número: ");
		num = sc.nextInt();
		
		if (num % 2 == 0) {
			resultado = "par";
		} else {
			resultado = "ímpar";
		}
		
		System.out.printf("O número %d é %s. \n", num, resultado);
		
		System.out.printf("Encerrando a execução.");
		
		sc.close();		

	}

}
