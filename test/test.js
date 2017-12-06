/**
 * XadillaX <i@2333.moe> created at 2017-12-03 14:46:14 with ❤
 *
 * Copyright (c) 2017 xcoder.in, all rights reserved.
 */
"use strict";

const assert = require("assert");

const cheerio = require("cheerio");
const spidex = require("spidex");

const constellation = require("../");

const days = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

describe("constellation", function() {
    for(let i = 0; i < 12; i++) {
        for(let j = 0; j < days[i]; j++) {
            it(`${i + 1}.${j + 1} should OK`, function(done) {
                this.timeout(20000);

                spidex.post("http://www.xzw.com/cquery/post.php", {
                    data: {
                        "date[0]": 2004,
                        "date[1]": i + 1,
                        "date[2]": j + 1
                    },
                    header: {
                        Host: "www.xzw.com"
                    },
                    timeout: 10000
                }, function(html, status, header) {
                    if(status !== 302) {
                        throw new Error("not 302");
                    }

                    const url = `http://www.xzw.com${header.location}`;
                    spidex.get(url, {
                        timeout: 10000
                    }, function(html) {
                        const $ = cheerio.load(html);
                        const standard = $(".sContent h2").text();

                        assert.equal(constellation(i + 1, j + 1, "zh-cn"), standard);
                        done();
                    });
                }).on("error", function(e) {
                    assert.ifError(e);
                });
            });
        }
    }
});
