var cesar = cesar || (function(){

    var doStaff = function(txt, desp, action){

        var replace = (function(){

            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z'];

        var l = abc.length;

        return function(c){
            var i = abc.indexOf(c.toLowerCase());

            if(i != -1){

                var pos = i;
                if(action){

                    pos += desp;
                    pos -= (pos>=27)?27:0;
                }else{

                    pos -= desp;
                    pos += (pos<0)?27:0;
                }
                return abc[pos];
            }
            return c;
        };

    })();


    var re = (/[a-zñ]/ig);
    return String(txt).replace(re, function(macth){

        return replace(macth);
    });
    
    };

    return {

        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();




function codificar(){
    document.getElementById("resultado").innerHTML = 
    cesar.encode(document.getElementById("cadena").value, parseInt(document.getElementById("semilla").value)%27);
}

function decodificar(){
    document.getElementById("resultado").innerHTML = 
    cesar.decode(document.getElementById("cadena").value, parseInt(document.getElementById("semilla").value)%27);
}

function validar_cifrado(){
	var cadena = document.getElementById("cadena").value;
	var posicion = document.getElementById("semilla").value;
	if(cadena.length == 0 || posicion.length == 0){
		document.getElementById("resultado").innerHTML = "Favor de llenar todos los campos";
	}else{
		codificar();
	}
	
}
function validar_descifrado(){
	var cadena = document.getElementById("cadena").value;
	var posicion = document.getElementById("semilla").value;
	if(cadena.length == 0 || posicion.length == 0){
		document.getElementById("resultado").innerHTML = "Favor de llenar todos los campos";
	}else{
		decodificar();
	}
	
}
function validar_cadena(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[a-zA-ZñÑ\s]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);

}
function validar_semilla(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);

}