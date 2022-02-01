//Entrada de "validation"

const validation = () => {
    let number = +prompt("Ingrese número entre 1 y 20");

    while ( number < 1 || number > 20){
        number = +prompt("Número fuera del rango. \n Ingrese un número valido entre el rango");
    } 
    return number;
} 

let operation = validation ();

//Multiplicación 
for (i=1; i<= operation; i++) {
    let multiplication = i * operation;
    console.log(`${i} * ${operation} = ${multiplication}`);
};


//Factorización + nesting de "for"

for(j=1; j <= operation; j++) {

    let = factor = 1;

    for(k = 1; k <= j; k++) {
        factor = factor * k;
    }

    console.log(`Factorial de ${j} es ${factor}`);
};


