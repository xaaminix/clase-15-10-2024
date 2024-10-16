//definicion de una funcion 
/*
function hello() {
    console.log('Hola clase');-
    console.log('5IV7');
}

//llamada a la funcion 

hello();
hello();
hello();
hello();
hello();
*/


/*
//Retorno de una funcion 
function hello() {
    return 'Hola clase';
}

const result = hello()

console.log(result);
*/


/*
//funcion que retorna otra funcion
function hello(){
    return function(){
        return 'hola soy la funcion 2'
    }
}

console.log(hello()());
*/


/*
//funcion con parametros 
function add(x){
    console.log(x);
}
add(5)
*/


/*
//multiparametros
function add(x,y){

    if (y===undefined){
        y=0;
    }
    console.log(x+y);
}
add(5,undefined);
*/


/*
//control de error en multiparametros
function add(x,y){

    if (y===undefined){
        y=0;
    }
    console.log(x+y);
}
add(5,undefined);
*/


/*
//parametro de tipo cadena
function add(name){

    console.log('Hola '+name);
}
add("Clase Js");
*/


//Objetos
const user = {
    nombre:'xana',
    Apellidop: 'Cruz',
    Apellidom: 'rodriguez',
    edad: 333,
    direccion: {
        calle: 'Nicolas bravo',
        No: 555,
        colonia: 'Narvarte',
        delegacion: 'Benito Juarez'
    },
    amigos: ['Bruno', 'Adrian', 'Maya'],
    activo: true
}

//consola nombre apellidop apellidom
//alert activo;
//consola edad
//alert calle no colonia delegacion
//consola amigos

console.log(nombre:user);
function ejercicio() {
    
    alert(user)
}
ejercicio();