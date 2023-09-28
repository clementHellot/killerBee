class Hex{


    // encode a string in hexadecimal
    static encode(str){
        let encoded = "";
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            encoded += charCode.toString(16);
        }
        return encoded;
    }

    // decode a hexadecimal string
    static decode(str){
        let decoded = "";
        for (let i = 0; i < str.length; i+=2) {
            let charCode = parseInt(str.substr(i, 2), 16);
            decoded += String.fromCharCode(charCode);
        }
        return decoded;
    }

}

export default Hex;