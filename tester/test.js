/**
 * Created by XadillaX on 14-1-11.
 */
var constellation = require("../");
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");

var days = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

// 载入模板
var html = fs.readFileSync(__dirname + "/template/index.html", "utf8");

// 创建服务器
http.createServer(function(req, resp) {
    var thisUrl = url.parse(req.url);
    var qs = querystring.parse(thisUrl.query);

    var mon = 1;
    var day = 1;

    // 天数
    if(qs.day) {
        var temp = parseInt(qs.day);

        mon = parseInt(qs.day / 100) % 13;
        if(mon === 0) mon = 1;

        day = parseInt(qs.day) % 100;
        if(day <= 0 || day > days[mon - 1]) {
            day = 1;
        }
    }

    // 语言
    var lang = qs.lang;
    if(!lang) {
        lang = "en";
    }

    // 星座
    var con = constellation(mon, day, lang);

    var thisHtml = html.replace("{:con}", con);

    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(thisHtml);
    resp.end();
}).listen(process.env.PORT || 3080);
