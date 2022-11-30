//Arrays

let arrayVacio = []

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9]

 //bucle
 let arrayNumerosPares = []
for (let i = 0; i < 9; i+=2) {
    
     arrayNumerosPares.push(i)
     
}  
console.log(arrayNumerosPares)

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

//Funciones

function suma(a,b) {
    return a + b
}

function potenciacion(a,b) {
    return a**b
}


function separarPalabras(str) {
    return str.split(' ')
}

function repetirString(str, x) {

    return str.repeat(x)
}


function esPrimo(n) {
    for (let i = 2; i < n; i++) {
       if (n % i == 0) {
        return false
        
        
       }
    }
    return true
}

function ordenarArray(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr
}

let arrResult = []

function obtenerPares(arrPar) {
    arrResult = arrPar.filter(arrPar => arrPar % 2 === 0)
    return arrResult
}

function pintarArray(arr) { 

    let arr2= arr.join(', ')
    let str1 = '['
    let str2 = ']'

    return str1 + arr2 + str2 


} 

function arrayMapi(arr,f) { 
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes[i] = f(arr[i])
        
    }
    return arrRes
}





function eliminarDuplicados(arr) {
   /*  arr.filter((item,index)=>{
        return arr.indexOf(item) === index;
    }) */

    let arrNuevo = new Set(arr)
    let result = [...arrNuevo]
    return result
}

//Iteraciones proyecto
//Arrays

let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

let holaMundo = ['Hola', 'Mundo']

let loGuardoTodo = ['hola', 'que', 23, 42.33,'tal']

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//Funciones

function multiplicacion(a,b) {
    return a * b
}

function division(a,b) {
    return a / b
}

function esPar(n){
    if (n % 2 === 0 ) {
        return true
    }else{
        return false
    }

}

function resta(a,b) {
    return a - b
    
}

let arrayFunciones = [suma, resta, multiplicacion]
arrayFunciones[0](2,3)

//Arrays y Funciones

function ordenarArray2(array) {
    array.sort(function (a, b) {
        return  b - a;
    })
    return array
}

function obtenerImpares(array) {
    let arrayImpar = []
    arrayImpar = array.filter(array => array % 2 !== 0)
    return arrayImpar
}

function sumarArray(array) {
    let arrayRed = []
    arrayRed = array.reduce((acc,curr)=> acc + curr)
    return arrayRed
}

function multiplicarArray (array){
    let arrayRed = []
    arrayRed = array.reduce((acc,curr)=> acc * curr)
    return arrayRed
}
