package aplicacao;

import java.util.Scanner;

import entidades.Aluno;

public class Aluno1Main {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Nome: ");
		String nome = sc.nextLine();
		
		System.out.println("Data de Nascimento (dd/MM/yyyy): ");
		String nascimento = sc.next();
		
		sc.nextLine();
		
		System.out.println("Turma: ");
		String turma = sc.nextLine();
		
		System.out.println("Data de Matrícula (dd/MM/yyyy): ");
		String matricula = sc.next();
		
		Aluno aluno = new Aluno(nome, nascimento, turma, matricula);
		
		System.out.println(aluno);
		
		sc.close();
	}

}
