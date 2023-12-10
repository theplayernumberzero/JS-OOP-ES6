class Person{   //Superclass, Baseclass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: "+this.name+" Yas: "+this.age);
    }
}

class Employee extends Person{      //Subclass, derivedClass, Childclass
    constructor(name,age,salary){
        super(name,age);    //this.name ve this.age i yeniden yazmana gerek kalmıyor.
        this.salary = salary;
    }

    showInfos(){    //Override
        console.log("İsim: "+this.name+" Yas: "+this.age+" Maas: "+this.salary);
    }
}

const emp = new Employee("Bahadir",22,0);

emp.showInfos();