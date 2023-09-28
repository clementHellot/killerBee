class URLEncode {

    static encode(text) {
        return encodeURIComponent(text);
    }

    static decode(text) {
        return decodeURIComponent(text);
    }
}

export default URLEncode;