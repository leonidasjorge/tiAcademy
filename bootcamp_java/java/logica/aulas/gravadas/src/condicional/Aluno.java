package condicional;

import java.util.Scanner;

public class Aluno {

	public static void main(String[] args) {
		
		/*
		 * Exercício
		 * 
		 * Faça um programa que receba como entradas, o nome da disciplina e a quantidade de aulas dadas.
		 * Além disso, o programa deve solicitar as notas de um aluno nos 4 bimestres, calcular a média e mostrar o total de faltas no ano letivo.
		 * O programa deve retornar a média do aluno, indicar se o aluno foi aprovado, considerando a média superior  a 6,0 e as presenças superior ou igual a 75% das aulas dadas.
		 */
		
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
		
		System.out.printf("A disciplina de %s teve %d aula(s). \n", disciplina, qtdAulas);
		System.out.printf("O aluno teve %d falta(s). \n", qtdFaltas);
		System.out.printf("O aluno tirou as notas %.1f, %.1f, %.1f %.1f, e, obteve a média %.1f. \n", n1, n2, n3, n4, media);
		System.out.printf("O aluno está %s.", resultado);
		
		sc.close();
	}

}
