package aplicacao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

import entidades.Contrato;
import entidades.Departamento;
import entidades.Funcionario;
import entidades.enums.Nivel;

public class Sistema {

	public static void main(String[] args) throws ParseException {
		Scanner           sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		System.out.println("Departamento:");
		String depto   = sc.nextLine();
		
		System.out.println("Nome do Funcionário:");
		String func    = sc.nextLine();
		
		System.out.println("Nível do Funcionário:");
		String nivel   = sc.nextLine();
		
		System.out.println("Salário Base:");
		double salario = sc.nextDouble();
		
		Funcionario funcionario = new Funcionario(Nivel.valueOf(nivel), func, salario, 
				new Departamento(depto));
		
		System.out.println("Quantidade de Contratos Associados: ");
		int qtdContratosAssociados = sc.nextInt();
		
		for (int i = 1; i <= qtdContratosAssociados; i++) {
			System.out.println("\nContrato nº " + i + ":");
			
			System.out.println("Data do Contrato (DD/MM/YYYY):");
			Date data = sdf.parse(sc.next());
			
			System.out.println("Valor da Hora: R$ ");
			double valorHora = sc.nextDouble();
			
			System.out.println("Quantidade Horas:");
			int horas = sc.nextInt();
			
			Contrato contrato = new Contrato(data, horas, valorHora);
			
			funcionario.adicionarContrato(contrato);
		}
		
		System.out.println("Informe o mês e o ano (mm/aaaa):");
		String mesAno = sc.next();
		
		int mes = Integer.parseInt(mesAno.substring(0, 2));
		int ano = Integer.parseInt(mesAno.substring(3));
		
		System.out.println("\nNome do Funcionário: " + funcionario.getNome());
		System.out.println("Departamento: " + funcionario.getDepartamento().getNome());
		System.out.println("Salário de " + mesAno + " R$ " + String.format("%.2f",
				funcionario.ganho(ano, mes)));
		System.out.println(mes);
		System.out.println(ano);
	}
}
