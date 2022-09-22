//Operadores

let numero1 = 5;
let numero2 = "5";

console.log(numero1===numero2)


console.log(numero1!==numero2)

let numero3 = 6;

console.log(numero1>numero3);
console.log(numero1<numero3);

//operadores posfijo

let i = 10;

i++;

console.log(i)

console.log(i+1)

//operadores de asignacion

let x = 3;

console.log("El valor inicial de x es: ", x)

x += i;   //x=x+i

console.log("La suma de x + i es igual a :", x)

x -=i; //x=x-i

//Estructuras de control if

let nota = Number.parseInt(prompt("Ingrese su nota:"))

console.log("Tu nota es : ",nota)

if(nota >= 7){
    console.log("Felicitaciones, estas promocionado!")
} else if (nota<7&&nota>=4){
    console.log("Estas aprobado")
} else {
    console.error("ESTAS DESAPROBADO!")
}

//estructura de bucles while

let y = 0;  //establezco el valor inicial del bucle

while (y<5){
    console.log("Imprimo una frase repetida");
    y = y + 1;  //y++
}


let z = 0;  //establezco el valor inicial del bucle

while (z<5){
    console.log(z);
    z = z + 1;  //y++
}

//estructura for

for(let p=0; p<=4; p++){
  console.log("El valor de p es:" ,p)
}

