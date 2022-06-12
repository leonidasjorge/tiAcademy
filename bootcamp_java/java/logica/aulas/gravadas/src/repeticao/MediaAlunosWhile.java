package repeticao;

import java.util.Scanner;

public class MediaAlunosWhile {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		double total = 0;
		int contador = 0;
		
		while (contador <= 9) {
			System.out.printf("\nDigite a %dª nota: \n", contador + 1);
			double nota = sc.nextDouble();
			
			total += nota; // total = (total + nota);
			contador++; // contador = (contador + 1);
		}
		
		double media = (total / contador);
		
		System.out.printf("\n- Total de todas as notas é %.1f. \n", total);
		System.out.printf("- Total de Alunos: %d. \n", contador);
		System.out.printf("- Média da classe é %.1f. \n", media);
		
		sc.close();

	}

}
