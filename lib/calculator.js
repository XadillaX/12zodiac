/**
 * Created by XadillaX on 14-1-7.
 */
var i18n = require("./i18n");

var days = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

module.exports = function(mon, day, lang) {
    mon = parseInt(mon);
    day = parseInt(day);

    var words = i18n[lang];
    if(!words) {
        words = i18n["en"];
    }

    if(mon < 1 || mon > 12) {
        throw new Error("Invalid month.");
    }

    if(day < 1 || day > days[mon - 1]) {
        throw new Error("Invalid day.");
    }

    var val = mon * 100 + day;

    if(val >= 321 && val <= 419) {
        return words[0];
    } else if(val >= 420 && val <= 520) {
        return words[1];
    } else if(val >= 521 && val <= 621) {
        return words[2];
    } else if(val >= 622 && val <= 722) {
        return words[3];
    } else if(val >= 723 && val <= 822) {
        return words[4];
    } else if(val >= 823 && val <= 922) {
        return words[5];
    } else if(val >= 923 && val <= 1023) {
        return words[6];
    } else if(val >= 1024 && val <= 1122) {
        return words[7];
    } else if(val >= 1123 && val <= 1221) {
        return words[8];
    } else if(val >= 1222 || val <= 119) {
        return words[9];
    } else if(val >= 120 && val <= 218) {
        return words[10];
    } else if(val >= 219 && val <= 320) {
        return words[11];
    }

    return ""
};
