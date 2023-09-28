import URLEncode from "./URLEncode";
import Hex from "./Hex";
import ROT13 from "./ROT13";

class Cipher{

    static encode(str){
        str = URLEncode.encode(str);
        str = Hex.encode(str);
        str = ROT13.encode(str);
        str = Hex.decode(str);

        return str;
    }

    static decode(str){
        str = Hex.encode(str);
        str = ROT13.decode(str);
        str = Hex.decode(str);
        str = URLEncode.decode(str);

        return str;
    }

}