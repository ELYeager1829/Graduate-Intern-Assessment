import java.util.ArrayList;
import java.util.List;

public class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
   
   public int getAge() {
        return age;
    }

    public String getDetails() {
        return "Name: " + name + ", Age: " + age;
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 20));
        students.add(new Student("Bob", 17));

        for (Student student : students) {
            if (student.age > 18) {
                System.out.println(student.getDetails());
            }
        }
    }
}

