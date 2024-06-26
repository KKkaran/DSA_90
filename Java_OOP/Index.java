public class Index{
    public static void main(String[] gg){
        System.out.println("This is it!");

        Employee emp1 = new Employee("Karan Sodhi", 27, 100000.00, "Toronto");
        System.out.println(emp1.salary);
        emp1.raiseSalary();
        System.out.println(emp1.salary);

    }
}

class Employee{
    private String name;
    private int age;
    public double salary;
    private String location;

    public Employee(String name, int age, double salary, String location){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.location = location;
    }

    public void raiseSalary(){
        this.salary += this.salary * 0.10;
    }
}