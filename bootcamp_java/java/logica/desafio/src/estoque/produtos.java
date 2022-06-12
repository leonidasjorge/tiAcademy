package estoque;

import java.util.Scanner;

public class produtos {

	public static void main(String[] args) {
		/*
		 * Cálculo do Imposto
		 * 
		 * -> Tipo: Cama, Mesa e Banho -> Alíquota: 37,41%;
		 * -> Tipo: Eletrodoméstico    -> Alíquota: 43,14%;
		 * -> Tipo: Vestuário          -> Alíquota: 38,42%;
		 */

		/*
		 * Cálculo da Margem de Lucro
		 * 
		 * -> Tipo: Cama, Mesa e Banho -> Margem: 30%;
		 * -> Tipo: Eletrodoméstico    -> Margem: 35%;
		 * -> Tipo: Vestuário          -> Margem: 50%;
		 */
		Scanner sc = new Scanner(System.in);

		char        categoria;
		char         resposta;
		double       aliquota = 0;
		double        imposto = 0;
		double          lucro = 0;
		double         margem = 0;
		double          preco = 0;
		double       subTotal = 0;
		double   totalCatCImp = 0;
		double   totalCatCLuc = 0;
		double  totalCatCProd = 0;
		double   totalCatEImp = 0;
		double   totalCatELuc = 0;
		double  totalCatEProd = 0;
		double   totalCatVImp = 0;
		double   totalCatVLuc = 0;
		double  totalCatVProd = 0;
		int     podeCatalogar = 0;
		int           produto = 0;
		int           qtdCatC = 0;
		int           qtdCatE = 0;
		int           qtdCatV = 0;
		int        quantidade = 0;
		int     totalCatCUnid = 0;
		int     totalCatEUnid = 0;
		int     totalCatVUnid = 0;
		String    nomeProduto = "";

		System.out.println("Deseja catalogar um produto? (S/N)");
		resposta = sc.next().charAt(0);
		resposta = Character.toUpperCase(resposta);

		while ((resposta != 'S') && (resposta != 'N')) {
			System.out.println("\n[S] Sim ou [N] Não");
			System.out.println("Deseja catalogar um produto? (S/N)");
			resposta = sc.next().charAt(0);
			resposta = Character.toUpperCase(resposta);
		}

		if (resposta == 'S') {
			System.out.println("\nInsira o Nome do Produto ou digite -1 para Sair: ");
			nomeProduto = sc.next();

			while ((!nomeProduto.equals("-1")) && (produto != 15)) {
				// (Início) Valida a Categoria
				System.out.println("\n[C] Cama, Mesa e Banho" +
						"\n[E] Eletrodomésticos" + "\n[V] Vestuário");
				System.out.println("Insira a Categoria do Produto: ");
				categoria = sc.next().charAt(0);
				categoria = Character.toUpperCase(categoria);

				while ((categoria != 'C') && (categoria != 'E') && (categoria != 'V')) {
					System.out.println("\nSó é possível informar uma das 3 categorias abaixo: ");
					System.out.println("[C] Cama, Mesa e Banho" +
							"\n[E] Eletrodomésticos" + "\n[V] Vestuário");
					System.out.println("Insira a Categoria do Produto: (C/E/V)");
					categoria = sc.next().charAt(0);
					categoria = Character.toUpperCase(categoria);
				}
				// (Fim) Valida a Categoria

				System.out.printf("\nInsira o preço do produto '%s': \n", nomeProduto);
				preco = sc.nextDouble();

				System.out.printf("\nInsira a quantidade em estoque do produto '%s': \n", nomeProduto);
				quantidade = sc.nextInt();

				produto++;

				// (Início) Calcular Imposto e Margem de Lucro
				switch (categoria) {
					case 'C': {
						qtdCatC++;
						
						// Produto
						System.out.printf("\n[Produto: %s]\n", nomeProduto);
						System.out.printf("- Este produto tem o preço de R$ %.2f.",
								preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n- Há %d unidades deste produto no estoque, totalizando o " +
								"valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatCProd += subTotal;
						totalCatCUnid += quantidade;
						
						// Imposto
						System.out.println("\n\n[Imposto]");
						System.out.println("-- A alíquota para os produtos da " +
								"categoria '[C] Cama, Mesa e Banho' é de 37,41%.");
						
						aliquota = 37.41/100;
						imposto  = (preco * aliquota);
						System.out.printf("-- O imposto de cada %s é de R$ %.2f.",
								nomeProduto, imposto);
						
						preco += imposto;
						System.out.printf("\n-- O preço de cada %s com o imposto é de R$ %.2f.",
								nomeProduto, preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n-- As %d unidades no estoque, com o imposto, tem o " +
								"valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatCImp += subTotal;
						
						// Margem de Lucro
						System.out.println("\n\n[Margem de Lucro]");
						System.out.println("-- A margem de lucro para os produtos da " +
								"categoria '[C] Cama, Mesa e Banho' é de 30%.");
						
						margem = 30.0/100;
						lucro  = (preco * margem);
						System.out.printf("-- O lucro de cada %s é de R$ %.2f.",
								nomeProduto, lucro);
						
						preco += lucro;
						System.out.printf("\n-- O preço de cada %s com a margem de lucro é de R$ %.2f.",
								nomeProduto, preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n-- As %d unidades no estoque, com a margem de lucro, tem " +
								"o valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatCLuc += subTotal;
						
						break;
					}
					case 'E': {
						qtdCatE++;
						
						// Produto
						System.out.printf("\n[Produto: %s]\n", nomeProduto);
						System.out.printf("- Este produto tem o preço de R$ %.2f.",
								preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n- Há %d unidades deste produto no estoque, totalizando " +
								"o valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatEProd += subTotal;
						totalCatEUnid += quantidade;						
						
						// Imposto
						System.out.println("\n\n[Imposto]");
						System.out.println("-- A alíquota para os produtos da " +
								"categoria '[E] Eletrodomésticos' é de 43,14%.");
						
						aliquota = 43.14/100;
						imposto  = (preco * aliquota);
						System.out.printf("-- O imposto de cada %s é de R$ %.2f.",
								nomeProduto, imposto);
						
						preco += imposto;
						System.out.printf("\n-- O preço de cada %s com o imposto é de R$ %.2f.",
								nomeProduto, preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n-- As %d unidades no estoque, com o imposto, tem o " +
								"valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatEImp += subTotal;
						
						// Margem de Lucro
						System.out.println("\n\n[Margem de Lucro]");
						System.out.println("-- A margem de lucro para os produtos da " +
								"categoria '[E] Eletrodomésticos' é de 35%.");
						
						margem = 35.0/100;
						lucro  = (preco * margem);
						System.out.printf("-- O lucro de cada %s é de R$ %.2f.",
								nomeProduto, lucro);
						
						preco += lucro;
						System.out.printf("\n-- O preço de cada %s com a margem de lucro é de R$ %.2f.",
								nomeProduto, preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n-- As %d unidades no estoque, com a margem de lucro, " +
								"tem o valor de R$ %.2f.", quantidade, subTotal);						
						
						totalCatELuc += subTotal;
						
						break;
					}
					case 'V': {
						qtdCatV++;
						
						// Produto
						System.out.printf("\n[Produto: %s]\n", nomeProduto);
						System.out.printf("- Este produto tem o preço de R$ %.2f.",
								preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n- Há %d unidades deste produto no estoque, totalizando " +
								"o valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatVProd += subTotal;
						totalCatVUnid += quantidade;						
						
						// Imposto
						System.out.println("\n\n[Imposto]");
						System.out.println("-- A alíquota para os produtos da " +
								"categoria '[V] Vestuário' é de 38,42%.");
						
						aliquota = 38.42/100;
						imposto  = (preco * aliquota);
						System.out.printf("-- O imposto de cada %s é de R$ %.2f.",
								nomeProduto, imposto);
						
						preco += imposto;
						System.out.printf("\n-- O preço de cada %s com o imposto é de R$ %.2f.",
								nomeProduto, preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n-- As %d unidades no estoque, com o imposto, tem o " +
								"valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatVImp += subTotal;
						
						// Margem de Lucro
						System.out.println("\n\n[Margem de Lucro]");
						System.out.println("-- A margem de lucro para os produtos da " +
								"categoria '[V] Vestuário' é de 50%.");
						
						margem = 50.0/100;
						lucro  = (preco * margem);
						System.out.printf("-- O lucro de cada %s é de R$ %.2f.",
								nomeProduto, lucro);
						
						preco += lucro;
						System.out.printf("\n-- O preço de cada %s com a margem de lucro é de R$ %.2f.",
								nomeProduto, preco);
						
						subTotal = (preco * quantidade);
						System.out.printf("\n-- As %d unidades no estoque, com a margem de lucro, " +
								"tem o valor de R$ %.2f.", quantidade, subTotal);
						
						totalCatVLuc += subTotal;
						
						break;
					}
					default:
						System.out.println("Categoria Inválida.");
					}
				// (Fim) Calcular Imposto e Margem de Lucro

				if (produto != 15) {
					System.out.println("\n\n- Insira o Nome do Produto ou digite -1 para Sair: ");
					nomeProduto = sc.next();
				}
			}
		}

		if ((produto != 0) && (produto < 15)) {
			System.out.printf("\nHá %d de 15 produto(s) catalogado(s).", produto);
			
			podeCatalogar = (15 - produto);
			System.out.printf("\nÉ possível catalogar mais %d produto(s).", podeCatalogar);

			System.out.println("\n\nDeseja catalogar um produto? (S/N)");
			resposta = sc.next().charAt(0);
			resposta = Character.toUpperCase(resposta);

			while ((resposta != 'S') && (resposta != 'N')) {
				System.out.println("\n[S] Sim ou [N] Não");
				System.out.println("Deseja catalogar um produto? (S/N)");
				resposta = sc.next().charAt(0);
				resposta = Character.toUpperCase(resposta);
			}

			if (resposta == 'S') {
				System.out.println("\nInsira o Nome do Produto ou digite -1 para Sair: ");
				nomeProduto = sc.next();

				while ((!nomeProduto.equals("-1")) && (produto != 15)) {
					// (Início) Valida a Categoria
					System.out.println("\n[C] Cama, Mesa e Banho" +
							"\n[E] Eletrodomésticos" + "\n[V] Vestuário");
					System.out.println("Insira a Categoria do Produto: ");
					categoria = sc.next().charAt(0);
					categoria = Character.toUpperCase(categoria);

					while ((categoria != 'C') && (categoria != 'E') && (categoria != 'V')) {
						System.out.println("\nSó é possível informar uma das 3 categorias abaixo: ");
						System.out.println("[C] Cama, Mesa e Banho" +
								"\n[E] Eletrodomésticos" + "\n[V] Vestuário");
						System.out.println("Insira a Categoria do Produto: (C/E/V)");
						categoria = sc.next().charAt(0);
						categoria = Character.toUpperCase(categoria);
					}
					// (Fim) Valida a Categoria

					System.out.printf("\nInsira o preço do produto '%s': \n", nomeProduto);
					preco = sc.nextDouble();

					System.out.printf("\nInsira a quantidade em estoque do produto '%s': " +
							"\n", nomeProduto);
					quantidade = sc.nextInt();

					produto++;

					// (Início) Calcular Imposto e Margem de Lucro
					switch (categoria) {
						case 'C': {
							qtdCatC++;
							
							// Produto
							System.out.printf("\n[Produto: %s]\n", nomeProduto);
							System.out.printf("- Este produto tem o preço de R$ %.2f.",
									preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n- Há %d unidades deste produto no estoque, " +
									"totalizando o valor de R$ %.2f.", quantidade, subTotal);
							
							totalCatCProd += subTotal;
							totalCatCUnid += quantidade;
							
							// Imposto
							System.out.println("\n\n[Imposto]");
							System.out.println("-- A alíquota para os produtos da " +
									"categoria '[C] Cama, Mesa e Banho' é de 37,41%.");
							
							aliquota = 37.41/100;
							imposto  = (preco * aliquota);
							System.out.printf("-- O imposto de cada %s é de R$ %.2f.",
									nomeProduto, imposto);
							
							preco += imposto;
							System.out.printf("\n-- O preço de cada %s com o imposto é de R$ %.2f.",
									nomeProduto, preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n-- As %d unidades no estoque, com o imposto, tem o " +
									"valor de R$ %.2f.", quantidade, subTotal);
							
							totalCatCImp += subTotal;
							
							// Margem de Lucro
							System.out.println("\n\n[Margem de Lucro]");
							System.out.println("-- A margem de lucro para os produtos da " +
									"categoria '[C] Cama, Mesa e Banho' é de 30%.");
							
							margem = 30.0/100;
							lucro  = (preco * margem);
							System.out.printf("-- O lucro de cada %s é de R$ %.2f.",
									nomeProduto, lucro);
							
							preco += lucro;
							System.out.printf("\n-- O preço de cada %s com a margem de lucro é de " +
									"R$ %.2f.", nomeProduto, preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n-- As %d unidades no estoque, com a margem de lucro, " +
									"tem o valor de R$ %.2f.\n", quantidade, subTotal);
							
							totalCatCLuc += subTotal;
							
							break;
						}
						case 'E': {
							qtdCatE++;
							
							// Produto
							System.out.printf("\n[Produto: %s]\n", nomeProduto);
							System.out.printf("- Este produto tem o preço de R$ %.2f.",
									preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n- Há %d unidades deste produto no estoque, " +
									"totalizando o valor de R$ %.2f.", quantidade, subTotal);
							
							totalCatEProd += subTotal;
							totalCatEUnid += quantidade;						
							
							// Imposto
							System.out.println("\n\n[Imposto]");
							System.out.println("-- A alíquota para os produtos da " +
									"categoria '[E] Eletrodomésticos' é de 43,14%.");
							
							aliquota = 43.14/100;
							imposto  = (preco * aliquota);
							System.out.printf("-- O imposto de cada %s é de R$ %.2f.",
									nomeProduto, imposto);
							
							preco += imposto;
							System.out.printf("\n-- O preço de cada %s com o imposto é de R$ %.2f.",
									nomeProduto, preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n-- As %d unidades no estoque, com o imposto, tem o " +
									"valor de R$ %.2f.", quantidade, subTotal);
							
							totalCatEImp += subTotal;
							
							// Margem de Lucro
							System.out.println("\n\n[Margem de Lucro]");
							System.out.println("-- A margem de lucro para os produtos da " +
									"categoria '[E] Eletrodomésticos' é de 35%.");
							
							margem = 35.0/100;
							lucro  = (preco * margem);
							System.out.printf("-- O lucro de cada %s é de R$ %.2f.",
									nomeProduto, lucro);
							
							preco += lucro;
							System.out.printf("\n-- O preço de cada %s com a margem de lucro é de " +
									"R$ %.2f.", nomeProduto, preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n-- As %d unidades no estoque, com a margem de lucro, " +
									"tem o valor de R$ %.2f.\n", quantidade, subTotal);						
							
							totalCatELuc += subTotal;
							
							break;
						}
						case 'V': {
							qtdCatV++;
							
							// Produto
							System.out.printf("\n[Produto: %s]\n", nomeProduto);
							System.out.printf("- Este produto tem o preço de R$ %.2f.",
									preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n- Há %d unidades deste produto no estoque, " +
									"totalizando o valor de R$ %.2f.", quantidade, subTotal);
							
							totalCatVProd += subTotal;
							totalCatVUnid += quantidade;						
							
							// Imposto
							System.out.println("\n\n[Imposto]");
							System.out.println("-- A alíquota para os produtos da " +
									"categoria '[V] Vestuário' é de 38,42%.");
							
							aliquota = 38.42/100;
							imposto  = (preco * aliquota);
							System.out.printf("-- O imposto de cada %s é de R$ %.2f.",
									nomeProduto, imposto);
							
							preco += imposto;
							System.out.printf("\n-- O preço de cada %s com o imposto é de R$ %.2f.",
									nomeProduto, preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n-- As %d unidades no estoque, com o imposto, tem o " +
									"valor de R$ %.2f.", quantidade, subTotal);
							
							totalCatVImp += subTotal;
							
							// Margem de Lucro
							System.out.println("\n\n[Margem de Lucro]");
							System.out.println("-- A margem de lucro para os produtos da " +
									"categoria '[V] Vestuário' é de 50%.");
							
							margem = 50.0/100;
							lucro  = (preco * margem);
							System.out.printf("-- O lucro de cada %s é de R$ %.2f.",
									nomeProduto, lucro);
							
							preco += lucro;
							System.out.printf("\n-- O preço de cada %s com a margem de lucro é de " +
									"R$ %.2f.", nomeProduto, preco);
							
							subTotal = (preco * quantidade);
							System.out.printf("\n-- As %d unidades no estoque, com a margem de lucro, " +
									"tem o valor de R$ %.2f.\n", quantidade, subTotal);
							
							totalCatVLuc += subTotal;
							
							break;
						}
						default:
							System.out.println("Categoria Inválida.");
						}
					// (Fim) Calcular Imposto e Margem de Lucro

					if (produto != 15) {
						System.out.println("\n- Insira o Nome do Produto ou digite -1 para Sair: ");
						nomeProduto = sc.next();
					}
				}
			}
		} else if (produto == 15) {
			System.out.println("\nNão é possível catalogar novos produtos.");
			System.out.println("Quantidade máxima de 15 produtos já está catalogada.");
		} else {
			System.out.println("\nNão há produtos catalogados.");
		}

		// Valor Total dos Produtos em Estoque, separados por Categoria
		System.out.println("\n[Valor Total dos Produtos em Estoque, separados por Categoria]\n");
		
		// Categoria C
		if (qtdCatC != 0) {
			System.out.println("- Categoria: [C] Cama, Mesa e Banho.");
			
			// Produto
			System.out.printf("-- Há %d produto(s) desta categoria no estoque, com o total de %d " +
					"unidade(s) ao todo.", qtdCatC, totalCatCUnid);
			System.out.println("\n\n--- Valor Total dos Produtos em Estoque:");
			System.out.printf("---- Somente o valor dos produtos: R$ %.2f.", totalCatCProd);
			
			// Imposto
			System.out.printf("\n---- Com o Imposto: R$ %.2f.", totalCatCImp);
			
			// Margem de Lucro
			System.out.printf("\n---- Com a Margem de Lucro: R$ %.2f.\n\n", totalCatCLuc);
		} else {
			System.out.println("Há 0 produtos catalogados na categoria [C] Cama, Mesa e Banho.");
		}
		
		// Categoria E
		if (qtdCatE != 0) {
			System.out.println("- Categoria: [E] Eletrodomésticos.");
			
			// Produto
			System.out.printf("-- Há %d produto(s) desta categoria no estoque, com o total de %d " +
					"unidade(s) ao todo.", qtdCatE, totalCatEUnid);
			System.out.println("\n\n--- Valor Total dos Produtos em Estoque:");
			System.out.printf("---- Somente o valor dos produtos: R$ %.2f.", totalCatEProd);
			
			// Imposto
			System.out.printf("\n---- Com o Imposto: R$ %.2f.", totalCatEImp);
			
			// Margem de Lucro
			System.out.printf("\n---- Com a Margem de Lucro: R$ %.2f.\n\n", totalCatELuc);
		} else {
			System.out.println("Há 0 produtos catalogados na categoria [E] Eletrodomésticos.");
		}
		
		// Categoria V
		if (qtdCatV != 0) {
			System.out.println("- Categoria: [V] Vestuário.");
			
			// Produto
			System.out.printf("-- Há %d produto(s) desta categoria no estoque, com o total de %d " +
					"unidade(s) ao todo.", qtdCatV, totalCatVUnid);
			System.out.println("\n\n--- Valor Total dos Produtos em Estoque:");
			System.out.printf("---- Somente o valor dos produtos: R$ %.2f.", totalCatVProd);
			
			// Imposto
			System.out.printf("\n---- Com o Imposto: R$ %.2f.", totalCatVImp);
			
			// Margem de Lucro
			System.out.printf("\n---- Com a Margem de Lucro: R$ %.2f.\n", totalCatVLuc);
		} else {
			System.out.println("Há 0 produtos catalogados na categoria [V] Vestuário.");
		}
		
		if (produto == 15) {
			System.out.println("\nTodos os 15 produto(s) foram catalogado(s).");
		} else {
			System.out.printf("\n%d de 15 produto(s) foram catalogado(s).", produto);
		}
		
		sc.close();
	}
}
