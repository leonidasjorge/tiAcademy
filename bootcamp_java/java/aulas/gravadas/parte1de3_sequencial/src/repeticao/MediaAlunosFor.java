package repeticao;

import java.util.Scanner;

public class MediaAlunosFor {

	public static void main(String[] args) {

		try (Scanner sc = new Scanner(System.in)) {
			double total = 0;
			int contador;
			
			// contador = 0  -> (inicialização) Com qual valor ele inicia;
			// contador <= 9 -> (condição) Até onde ele vai; neste caso, vai parar no 10;
			// contador++    -> (incremento/decremento) Contador está somando + 1 a cada vez que faz o processo do "for";
			for (contador = 0; contador <= 9; contador++) {
				System.out.printf("\nDigite a %dª nota: \n", contador + 1);
				double nota = sc.nextDouble();
				
				total += nota; // total = (total + nota);
			}
			
			double media = (total / contador);
			
			System.out.printf("- Total de Alunos da Classe: %d. \n", contador);
			System.out.printf("\n- Total de notas dos alunos %.1f. \n", total);
			System.out.printf("- Média da classe é %.1f. \n", media);
			
			sc.close();
		}

	}

}
