class ROT13{

    // Encode a string using ROT13
    static encode(str){
        let encoded = "";
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if(charCode >= 65 && charCode <= 90){
                charCode = ((charCode - 65 + 13) % 26) + 65;
            }else if(charCode >= 97 && charCode <= 122){
                charCode = ((charCode - 97 + 13) % 26) + 97;
            }
            encoded += String.fromCharCode(charCode);
        }
        return encoded;
    }

    // Decode a string using ROT13
    static decode(str){
        let decoded = "";
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if(charCode >= 65 && charCode <= 90){
                charCode = ((charCode - 65 - 13) % 26) + 65;
            }else if(charCode >= 97 && charCode <= 122){
                charCode = ((charCode - 97 - 13) % 26) + 97;
            }
            decoded += String.fromCharCode(charCode);
        }
        return decoded;
    }
    
}

export default ROT13;