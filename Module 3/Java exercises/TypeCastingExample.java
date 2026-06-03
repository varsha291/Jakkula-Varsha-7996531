public class TypeCastingExample {
    public static void main(String[] args) {

        double d = 12.75;
        int i = (int)d;

        int num = 25;
        double d2 = (double)num;

        System.out.println("Double to Int : " + i);
        System.out.println("Int to Double : " + d2);
    }
}