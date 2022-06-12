package sequencial;

public class Variaveis {

	public static void main(String[] args) {

		int quantidade = 1500;
		float valorMercadoria = 750.28f;
		double peso = 78.3;
		char genero = 'F';

		System.out.printf("A quantidade de itens em estoque é de %d. \n", quantidade);
		System.out.printf("O valor da parcela é de R$ %.1f \n", valorMercadoria);
		System.out.printf("O peso é %f quilos. \n", peso);
		System.out.printf("Do gênero %c, tem matriculadas %d alunas. \n", genero, quantidade);

	}

}
