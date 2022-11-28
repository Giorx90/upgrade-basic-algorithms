let mes = 2
let anno = 2024

switch(mes) {
    case 2:
        var esBisiesto = anno%400==0 || (anno%100==0 && anno%4==0)
        if(esBisiesto){
            console.log(29);
        }
        else {
            console.log(28);
        } 
        break;
    case 3:
    case 5:
    case 9:
    case 11:
        console.log(30);
        break;
    default:
        console.log(31);
        break;
}
