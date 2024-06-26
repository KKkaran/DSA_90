public class BankAccount{

    private String owner;
    private double money;

    public BankAccount(String owner, double money){
        this.owner = owner;
        this.money = money;
    }

    public void deposit(double money){
        this.money += money;
    }

    public void withdraw(double money){
        this.money -= money;
    }

    public double getMoney(){
        return this.money;
    }

    public String getOwner(){
        return this.owner;
    }

}