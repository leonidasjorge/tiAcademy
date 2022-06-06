package repeticao;

public class OperadoresCompostos {

	public static void main(String[] args) {
		
		int x = 3, y = 5;
		
		System.out.println(x += 7);  // x = (x + 7)  = 10;
		System.out.println(x -= 4);  // x = (x - 4)  = 6;
		System.out.println(y *= x);  // y = (y * x)  = 30;
		System.out.println(y /= 10); // y = (y / 10) = 3;
		System.out.println(y %= x);  // y = (y % x)  = 3;

	}

}
