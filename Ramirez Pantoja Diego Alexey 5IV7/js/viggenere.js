var app = new function () {
    
    this.doCrypt = function (isDecrypt) {
        var keyStr = document.getElementById("key").value;

      
        if (keyStr.length == 0) {
            alert("Falta llave");
            return;
        }

        var keyArray = filterKey(keyStr);
        if (keyArray.length == 0) {
            alert("Llave no valida");
            return;
        }

        if (isDecrypt) {
            for (var i = 0; i < keyArray.length; i++)
                keyArray[i] = (26 - keyArray[i]) % 26;
        }

        var textElem = document.getElementById("text");
        textElem.value = crypt(textElem.value, keyArray);
    };

    //obtencion
    function crypt(input, key) {
        var output = "";
        for (var i = 0, j = 0; i < input.length; i++) {
            var c = input.charCodeAt(i);
            if (isUppercase(c)) {
                output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
                j++;
            } else if (isLowercase(c)) {
                output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
                j++;
            } else {
                output += input.charAt(i);
            }
        }
        return output;
    }


 
    function filterKey(key) {
        var result = [];
        for (var i = 0; i < key.length; i++) {
            var c = key.charCodeAt(i);
            if (isLetter(c))
                result.push((c - 65) % 32);
        }
        return result;
    }


    // que sea letra del alfabeto.
    function isLetter(c) {
        return isUppercase(c) || isLowercase(c);
    }

    // que sea una mayuscula
    function isUppercase(c) {
        return 65 <= c && c <= 90; 
    }

    // que sea letra minúscula.
    function isLowercase(c) {
        return 97 <= c && c <= 122;  
    }

};