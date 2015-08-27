"use strict";
var fs = require('fs');
var merge = require("merge");
require("xcept");
var emptyFcn = function(){};

module.exports = function(){
    var that = this;
    this.data = {};

    this.load = function(filename, callback){
        callback = callback || emptyFcn;
        var obj;
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                if (err.code === 'ENOENT'){
                    data = '{}';
                    fs.writeFile(filename, data, function(errwrite){
                        if (errwrite) return callback(errwrite);
                    });
                }
                else {
                    return callback(err);
                }
            }
            obj = JSON.parse(data);
            that.data = obj;
            callback(null, obj);
        });
    };

    this.add = function(object, callback){
        callback = callback || emptyFcn;
        that.data = merge(that.data, object);
        callback();
    };

    this.remove = function(key, callback){
        callback = callback || emptyFcn;
        that.data = that.data.except(key);
        callback();
    };

    this.save = function(filename, callback){
        callback = callback || emptyFcn;
        var filestuff = JSON.stringify(that.data, null, "\t");
        fs.writeFile(filename, filestuff, function(err){
            if (err) return callback(err);
            callback(null, filestuff);
        }); 
    };
};
