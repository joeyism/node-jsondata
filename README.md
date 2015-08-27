# JsonData

[![Build Status](https://travis-ci.org/joeyism/node-jsondata.svg?branch=master)](https://travis-ci.org/joeyism/node-jsondata)

A module that saves and loads json data from a file. You can also modify the object loaded.

## Installation

    > npm install --save jsondata

## Usage
In order to declare JsonData, you need to 

    var JsonData = require("jsondata");
    var jsondata = new JsonData();

There are 4 methods available:
* [`load`](#load)
* [`add`](#add)
* [`remove`](#remove)
* [`save`](#save)

And to get the data loaded, it is simply

    jsondata.data // object that is jsondata

### load
Loads data from a file

    jsondata.load(/** filename **/, function(error, obj){
        if (err) throw err;
        assert(jsondata.data, obj); // obj is the loaded object
    });

### add
Adds an object to jsondata.data

    jsondata.add(/** object to add to jsondata.data **/, function(){
        /** jsondata.data has been modified **/
    });

### remove 
Removes a key from the object that is jsondata.data

    jsondata.remove(/** key to be removed **/, function(){
        /** jsondata.data has been modified **/
    });

### save
Saves object to a file

    jsondata.save(/** filename **/, function(error, str){
        if (err) throw err;
        assert(JSON.stringify(jsondata.data), str); // str is the stringify version of the data that was saved into the file
    });

## Versions
**1.1.0**
* load will create if it doesn't exist

**1.0.1**
* Allow to not have callbacks

**1.0.0**
* First commit
