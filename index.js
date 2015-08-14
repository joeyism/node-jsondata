"use strict";
var fs = require('fs');
var merge = require("merge");
require("xcept");

module.exports = function(){
    var that = this;
    this.data = {};

    this.load = function(filename, callback){
        var obj;
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) return callback(err);
            obj = JSON.parse(data);
            that.data = obj;
            callback(null, obj);
        });
    };

    this.add = function(object, callback){
        that.data = merge(that.data, object);
        callback();
    };

    this.remove = function(key, callback){
        that.data = that.data.except(key);
        callback();
    };

    this.save = function(filename, callback){
        var filestuff = JSON.stringify(that.data, null, "\t");
        fs.writeFile(filename, filestuff, function(err){
            if (err) return callback(err);
            callback(null, filestuff);
        }); 
    };
};
