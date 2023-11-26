//Eskiden kalıtım prototype üzerinden yapılıyordu
//Syntactic Sugar
class Employee{
    constructor(name,age,salary){   //class oluşturulduğunda direk olarak constructor metodu çalışacak.
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    //functionlar arkaplanda yeniden prototype içine yazılır
    showInfos(){    //classta metod yazaken function diye belirtmene gerek yok
        console.log("İsim: "+this.name+" Yas: "+this.age+" Maas: "+this.salary);
    }
}

const emp = new Employee("Bahadir",22,0);
console.log(emp);

emp.showInfos();