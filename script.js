//El programa deberá leer, de la entrada estándar, los mensajes recibidos desde el servidor por la
//aplicación de mensajer ıa instantanea, cada uno en una línea. Estarán compuestos de entre 1 y 1.000
//caracteres, formados unicamente por letras del alfabeto inglées, espacios, 
//signos de exclamación (solo de cierre, por supuesto), y otros signos ortográficos.

//Por cada línea de la entrada, el programa deberá escribir ESGRITO si el texto tiene más signos
//de exclamación que letras (del abecedario inglés), y escrito en caso contrario.

function compare(input){
    let fcounter, scounter, flag;
    fcounter = 0;
    scounter = 0;
    flag = 'escrito';

    for(let i = 0; i < input.length; i++){
        if(input.charAt(i) == '!'){ fcounter++; }
        
        
        if((input.charAt(i)).match(/[a-z]/i)){ scounter++; }
        
        
        if(fcounter > scounter){ flag = 'ESGRITO'; }
    }
    return flag;
}

let word;
word = prompt('Ingrese algo: ', '');
document.write(compare(word) + '<br>');
