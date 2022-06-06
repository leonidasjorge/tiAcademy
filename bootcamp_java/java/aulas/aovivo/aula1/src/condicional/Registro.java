package condicional;

import java.util.Scanner;

public class Registro {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		double n1, n2, n3, n4, media;
		int qtdAulas, qtdFaltas;
		String disciplina, resultado;

		System.out.println("Digite a Disciplina: ");
		disciplina = sc.next();

		System.out.println("Informe a Quantidade de Aulas: ");
		qtdAulas = sc.nextInt();
		
		System.out.println("Informe a Quantidade de Faltas: ");
		qtdFaltas = sc.nextInt();

		System.out.println("Informe as 4 notas: ");
		n1 = sc.nextDouble();
		n2 = sc.nextDouble();
		n3 = sc.nextDouble();
		n4 = sc.nextDouble();

		media = ((n1 + n2 + n3 + n4) / 4);
		
		if ((media >= 6.0) && (qtdFaltas < (qtdAulas * 0.25)))
			resultado = "Aprovado";
		else
			resultado = "Reprovado";
		
		System.out.printf("A disciplina de %s teve %d aulas. \n", disciplina, qtdAulas);
		System.out.printf("O aluno teve %d faltas. \n", qtdFaltas);
		System.out.printf("O aluno tirou as notas %.1f, %.1f, %.1f %.1f, e, obteve a média %.1f. \n", n1, n2, n3, n4, media);
		System.out.printf("O aluno está %s.", resultado);
		
		sc.close();
	}

}
