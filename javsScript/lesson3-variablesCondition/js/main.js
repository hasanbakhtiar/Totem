   
// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield


// ES5

// var = varibale / global
// var infoData = 10;
// var infoData = 5;
// console.log(infoData);

// ES6
// const = constant 
// let = let / local

// var infoVar = "Var";
// // global
// if(true){
//     //global local
//     if(true){
//         // local
//         let infoData = 'Hello';

//         infoData = "JavaScript";
//         console.log(infoData);
        
//         console.log(infoVar);
//     }
// }
// =========================================================================




//CONDITION 
// if -> əgər
// else -> deyilsə
// else if -> əgər deyilsə


// const infoData = 110;


// if(infoData == 5){
//     console.log('this is 5');
// }else if(infoData == 10){
// console.log('this is 10');
// }
// else if(infoData == 11){
//     console.log('this is 11');
//     }
// else{
//     console.log('sehvdir');
// }


// const myTime = 10;


// if ( (myTime >= 5) && (myTime <= 11) ) {
//     console.log('Good morning');
//         if (myTime == 7) {
//             console.log('Wake up');
//         }else if(myTime==10){
//             console.log("have breakfast" );
//         }

// }else if( (myTime >= 12) && (myTime <= 17)){
//         console.log("Good afternoon");
// }
// else if( (myTime >= 18) && (myTime <= 23)){
//     console.log("Good Evening");
// }else if( (myTime >= 0) && (myTime <= 4)){
//     console.log("please go to bedroom");
// }
// else{
//     console.log('No Time');
// }



// switch 
// case

// const infoData = "Hello";

// switch (infoData  ) {
//     case 10:
//         console.log('this is 5');
//         break;
//     case "Hello":
//         console.log('this is 10');
//         break;    

//     default:
//         console.log('this is empty');
//         break;
// }

try {
    throw "Bu bir istisnadir";
    console.losg("Hello"); 
} catch (err) {
    console.log(  err);
}finally{
    console.log('men her halda ishleyecem');
}