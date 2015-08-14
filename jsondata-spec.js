"use strict";
var expect = require("chai").expect;
var Jsondata = require("../index");
var path = require("path");
var async = require("async");

describe("jsondata", function(){

    it("should load, add, save, remove data", function(done){
        var jsondata = new Jsondata();
        var file = path.join(__dirname, "sample.json");
        
        async.waterfall([
            function(next){
                jsondata.load(file, function(err, data){
                    expect(err).to.be.null;
                    expect(data).to.deep.equal({"hello": "test"});
                    next();
                });      
            }, 
            function(next){
                jsondata.add({ "test": "data" }, function(err){
                    expect(err).to.be.undefined;
                    expect(jsondata.data).to.deep.equal({"hello": "test", "test": "data"});
                    next();
                });
            },
            function(next){
                jsondata.remove("hello", function(err){
                    expect(err).to.be.undefined;
                    expect(jsondata.data).to.deep.equal({"test": "data"});
                    next();
                });
            }, function(next){
                jsondata.save(file, function(err, result){
                    expect(err).to.be.null; 
                    expect(result).to.equal('{\n\t"test": "data"\n}');
                    next();
                });
            }, function(next){
                jsondata.data = {"hello": "test"};
                jsondata.save(file, function(err, result){
                    expect(err).to.be.null;
                    expect(result).to.equal('{\n\t"hello": "test"\n}');
                    next();
                });
            }], function(){
                done();
            });
    });
});
