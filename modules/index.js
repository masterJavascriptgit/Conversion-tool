const { handleErrors } = require("../errors")
const { unit , limitRgx } = require("../utils/unit")


class Conversion extends handleErrors {

    textToHexadecimal(param) {

        var result = "";

        for (let i = 0; i < param.length; i++) {
            result += param.charCodeAt(i).toString(16);
        }

        super.isString(param);
        return result;
    }

    hexadecimalToText(param) {
        var code = [];
        var result = '';

        code = param.match(limitRgx)

        for (const element of code) {
            result += String.fromCharCode(parseInt(element, 16))
        }

        super.isString(param);
        return result;
    }

    textToBinary(param) {

        var result = "";

        for (let i = 0; i < param.length; i++) {
            result += param.charCodeAt(i).toString(2).concat(" ");
        }

        super.isString(param);
        return result;
    }

    binaryToText(param) {

        var result = "";

        param.split(" ").map((value, index) => {
            result += String.fromCharCode(parseInt(value, 2));
        })

        return result;
    }

    rgbToHex(r, g, b) {

        if (!r) throw new Error("invalid parameters");

        var hex = '#';
        hex += `${unit(r)}${g ? unit(g) : "00"}${b ? unit(b) : "00"}`.toUpperCase();

        return hex;
    }

    hexToRgb(hex) {

        var rgb = "";
        let code = hex.slice(1).match(limitRgx);

        for (const element of code) {
            rgb += parseInt(element, 16) + " "
        }

        return rgb;
    }

}

const conversion = new Conversion();

module.exports = { conversion }
