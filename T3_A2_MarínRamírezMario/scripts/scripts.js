function obtenerCurp() {
    var nombre = document.getElementById("caja_nombre");
    var apellidoP = document.getElementById("caja_ap_p");
    var apellidoM = document.getElementById("caja_ap_m");
    var dia = document.getElementById("caja_dia_nac");
    var mes = document.getElementById("caja_mes_nac");
    var año = document.getElementById("caja_anio");
    var res = document.getElementById("res");
    var sexo = document.getElementById("caja_sex");
    var estado = document.getElementById("estado_nac");
    var curp = apellidoP.value.slice(0, 2) + apellidoM.value.slice(0, 1) + nombre.value.slice(0, 1) + año.value.slice(2, 4)
        + mes.value.slice(0, 2) + dia.value.slice(0, 2) + sexo.value.slice(0, 1) + estado.value.slice(0, 2)
        + apellidoP.value.slice(2, 3) + apellidoM.value.slice(2, 3) + Math.round(Math.random() * 9)
        + Math.round(Math.random() * 99);

    res.innerText = "SU CURP ES: " + curp.toUpperCase();
}


function obtenerSistemas() {
    var decimal = document.getElementById("caja_numDecimal");
    var res1 = document.getElementById("caja_numBinario");
    var numero = decimal.value;
    var numeroOct = decimal.value;
    var numeroHex = decimal.value;
    var exp;
    var digito;
    var binario;
    exp = 0;
    binario = 0;

    while (numero != 0) {
        digito = parseInt(numero % 2);

        binario = parseInt(binario + digito * Math.pow(10, exp));

        exp++;
        numero = parseInt(numero / 2);

    }
    res1.value = binario;

    var decimal = document.getElementById("caja_numDecimal");
    var res2 = document.getElementById("caja_numOctal");
    var digitoOct;
    var Octal;
    exp = 0;
    Octal = 0;

    while (numeroOct != 0) {
        digitoOct = parseInt(numeroOct % 8);
        Octal = parseInt(Octal + digitoOct * Math.pow(10, exp));
        exp++;
        numeroOct = parseInt(numeroOct / 8);

    }
    res2.value = Octal;

    var res3 = document.getElementById("caja_numHex ");
    var digitohex;
    var hex;
    exp = 0;
    hex = 0;

    while (numeroHex != 0) {
        digitoOct = parseInt(numeroHex % 16);
        hex = parseInt(hex + digitohex * Math.pow(10, exp));
        exp++;
        numeroHex = parseInt(numeroHex / 16);

    }
    res3.value = hex;
}

function trnasformarCadena() {
    var cajaCadena = document.getElementById("caja_entrada");
    var cajavocales = document.getElementById("caja_voc");
    var cajacons = document.getElementById("caja_cons");
    var cajarep = document.getElementById("caja_rep");
    var cajaalt = document.getElementById("caja_alt");
    var cadena = cajaCadena.value;
    var numVocales;
    var long = cadena.length;
    long = long - cadena.replace(/[^aeiouAEIOU]/g, '').length;
    cajacons.value = long;
    cajavocales.value = cadena.replace(/[^aeiouAEIOU]/g, '').length;
    var resultado = '';
    for (let i = 0; i < cadena.length; ++i) {
        if (i % 2 == 0) {
            resultado += cadena[i].toUpperCase();
        } else {
            resultado += cadena[i].toLowerCase();
        }
    }
    cajaalt.value = resultado;
}