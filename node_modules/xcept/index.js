"use strict";

// Array
var ap = Array.prototype;
var exceptArray = function(elementToOmit){
    var omitIndex = this.indexOf(elementToOmit);
    this.splice(omitIndex,1);
    return this;
};

ap.except = exceptArray;
ap.omit = exceptArray;

// Object
var op = Object.prototype;
var exceptObject = function(elementToOmit){
    delete this[elementToOmit];
    return this;
};

op.except = exceptObject;
op.omit = exceptObject;
