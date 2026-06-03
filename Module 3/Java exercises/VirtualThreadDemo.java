public class VirtualThreadDemo {

    public static void main(String[] args)
            throws Exception {

        for(int i=1;i<=100000;i++) {

            int num = i;

            Thread.startVirtualThread(() -> {

                System.out.println(
                        "Virtual Thread "
                        + num);
            });
        }

        Thread.sleep(3000);
    }
}