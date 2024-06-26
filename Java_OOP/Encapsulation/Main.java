public class Main{
    public static void main(String[] gg){

        BankAccount ba1 = new BankAccount("Karan Sodhi", 50000.00);
        System.out.println("Account Created: " + ba1.getOwner() + " " + ba1.getMoney());
        ba1.deposit(10000);
        System.out.println("Deposit Made: " + ba1.getOwner() + " " + ba1.getMoney());

    }
}