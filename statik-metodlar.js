//Statik metodlar obje oluşturmasak dahi kullanabildiğimiz metodlardır

class Matematik{

    cube(x){
        console.log(x*x*x);
    }
    static square(x){
        console.log(x*x);
    }
}
const math = new Matematik();
math.cube(3);

Matematik.square(2);    //static metod
// math.square(2);      //static metodlar obje üzerinden ERİŞİLEMEZ.