# Xcept

[![Build Status](https://travis-ci.org/joeyism/node-xcept.svg?branch=master)](https://travis-ci.org/joeyism/node-xcept)
A module that allows object and arrays to omit elements

## Installation

    > npm install --save xcept

## Usage
To use for array or object, adding either *.omit* or *.except* at the end will work. To load the module, just require it as such:

    require("xcept");

### Array

**except**

    [1, 2, 3].omit(1) // [2, 3]
    [1, 2, 3].omit(2) // [1, 3]
    [1, 2, 3].omit(3) // [1, 2]
    [1, 2, 3, 4, 5].omit(1).omit(2).omit(3) // [4, 5]

**omit**
    
    [1, 2, 3].except(1) // [2, 3]
    [1, 2, 3].except(2) // [1, 3]
    [1, 2, 3].except(3) // [1, 2]
    [1, 2, 3, 4, 5].except(1).except(2).except(3) // [4, 5]

### Object

**except**

    { "a": "some value", "b": "other value", "c": "more value" }.omit(a) // { "b": "other value", "c": "more value" }
    { "a": "some value", "b": "other value", "c": "more value" }.omit(b) // { "a": "some value", "c": "more value" }
    { "a": "some value", "b": "other value", "c": "more value" }.omit(c) // { "a": "some value", "b": "other value" } 
    { "a": "some value", "b": "other value", "c": "more value" }.omit(a).omit(c) // { "b": "other value" } 

**omit**

    { "a": "some value", "b": "other value", "c": "more value" }.except(a) // { "b": "other value", "c": "more value" }
    { "a": "some value", "b": "other value", "c": "more value" }.except(b) // { "a": "some value", "c": "more value" }
    { "a": "some value", "b": "other value", "c": "more value" }.except(c) // { "a": "some value", "b": "other value" } 
    { "a": "some value", "b": "other value", "c": "more value" }.except(a).except(c) // { "b": "other value" } 

## Versions
**1.0.0**
* First working version
