var expect = require("chai").expect;
require("../index.js");

describe("xcept", function(){

    describe("array", function(){
        it("should omit an element from the array", function(){
            expect(["a","b","c"].omit("a")).to.deep.equal(["b","c"]);
            expect(["a","b","c"].omit("b")).to.deep.equal(["a","c"]);
            expect(["a","b","c"].omit("c")).to.deep.equal(["a","b"]);
            expect(["a","b","c"].omit("c").omit("b")).to.deep.equal(["a"]);
        });
    });

    describe("object", function(){
        it("should omit an element from the object", function(){
            expect({"a":"some","b":"value","c":"here"}.omit("a")).to.deep.equal({"b":"value","c":"here"});
            expect({"a":"some","b":"value","c":"here"}.omit("b")).to.deep.equal({"a":"some","c":"here"});
            expect({"a":"some","b":"value","c":"here"}.omit("c")).to.deep.equal({"a":"some","b":"value"});
            expect({"a":"some","b":"value","c":"here"}.omit("c").omit("a")).to.deep.equal({"b":"value"});
        });
    });

});
