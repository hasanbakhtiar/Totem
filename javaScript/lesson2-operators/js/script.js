// 
// All Operators
// --------------------------------------------------------------------------------------------------
// Assignment Operators (Daxil Etmə operatorları) Start
// =
// +=
// -=
// *=
// /=
// %=
// **=

var infoDatA = 5;
var infoDatB = 10;
infoDatA += infoDatB;
document.write(infoDatA);
// Assignment Operators (Daxil Etmə operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Arithmetic Operators (Riyazi operatorlar) Start
// +    Toplama
// -    Çıxma
// *    Vurma
// /    Bölmə
// %    Qalıq
// **   Üstü
// ++   Bir artırma
// --   Bir əksiltmə
var infoNumbSt = 5; 
var infoNumbNd = 10; 
var infoNumbRd = 5;
    infoNumbRd++;
// infoNumbRd--;

document.write(infoNumbSt + infoNumbNd + "<br>");
document.write(infoNumbSt - infoNumbNd + "<br>");
document.write(infoNumbSt * infoNumbNd + "<br>");
document.write(infoNumbSt / infoNumbNd + "<br>");
document.write(infoNumbSt %  infoNumbNd + "<br>");
document.write(infoNumbSt ** infoNumbNd + "<br>");
document.write(infoNumbRd + "<br>");


// Arithmetic Operators (Riyazi operatorlar) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Comparison Operators(Qarşılaşdırma operatorları) Start
// ==   (qoşa bərabər)
// ===  (üçlü bərabər)
// !=   (nida tək bərabər)
// !==  (nida qoşa bərabər)
// <    (kiçikdir)
// <=   (kiçik bərabərdir)
// >    (böyükdür)
// >=   (böyük bərabərdir)

var infoCompaSt     =  7;
var infoCompaNd     =  7;

if(infoCompaSt >= infoCompaNd){
    document.write(true);
}else{
    document.write(false);
}
document.write("<br>");

// Comparison Operators(Qarşılaşdırma operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Logical Operators (Məntiqi operatorlar) Start
// && (və) true && true = true # true && false = false # true && true && false = false # true && true && true = true 
// || (və ya) true || true = true # true || false = true # true || false || false = true # true || true || true = true 
// ! (deyil)  !(true) = false # !(false) = true
var infoLogiSt = true ;
var infoLogiNd = false;


if(!infoLogiNd){   //default true
    document.write(true);
}else{
    document.write(false);
}

// Logical Operators (Məntiqi operatorlar) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// String  Operators (Mətn operatorları) Start
// +    (toplama string data tiplərini birləşdirir)
// +=   (toplama bərabərdir)
var infoStriSt = "Hi ";
var infoStriNd = "JavaScript";
// infoNumbSt += infoCompaNd;

document.write("<br>"+ infoStriSt + infoStriNd+"<br>")
 

// String  Operators (Mətn operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// \            (tərs slash)(Qaçındırma operatorudur)
// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)

// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)
// (5 >= 10) ? document.write("Hi") : document.write("Bye");
// şərt            ? true                 : false

// void         (dəyişkənin dəyərini undefined etmək üçündür)
// delete       (ojectin dəyərini silmək üçündür)
// new          (yeni dəyər yaratməq üçündür)
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// instanceof   (dəyişkənin içində xüsusiyyət olub olmamasını yoxlamaq üçündür)





    

// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------

class Info{
    constructor(name){
        this.newName = name;
    }
    sayHi(){
        return `Hello `+this.newName;
    }
}


const a = new Info('Hasan');
console.log(a.sayHi());
