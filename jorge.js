function rectangleArea1(width,heigth){
    if(width<0 || heigth <0){
        return 'You need positive integerto calculate the area';
    } else { //este else está de mas, porque el return de la linea anterior hace que esta parte no se ejecute en caso que el if de la linea 2 sea verdadero
        return width * heigth;
    }

}

function rectangleArea2(width,heigth){
    if(width<0 || heigth <0){
        return 'You need positive integerto calculate the area';
    } else { //este else está de mas, porque el return de la linea anterior hace que esta parte no se ejecute en caso que el if de la linea 2 sea verdadero
        return width * heigth;
    }

}

// el return es importante porque se puede invocar a la función y ésta devuelve (return) un valor, ya sea el string con el aviso, o el número con el valor del área.

const area1 = rectangleArea1(8,5);
const area2 = rectangleArea1(-8,5);

const area3 = rectangleArea2(8,5);
const area4 = rectangleArea2(-8,5)

console.log(`Resultados con el else statement: ${area1}, ${area2}`);

console.log(`Resultados sin el else statement: ${area3}, ${area4}`);