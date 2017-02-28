#!/usr/bin/env node
var fs = require('fs');
var clc = require("cli-color");
var prompt = require('prompt');


prompt.start();

prompt.get(['error','description', 'solution', 'tags', 'reference'], function(err, res){

    let newTags = res.tags.replace(/ /g,'').split(',');
    let newRefs = res.references.replace(/ /g,'').split(',');

    let newErr = {
        error: res.error,
        description: res.description,
        tags: newTags,
        references: newRefs
    };
console.log(newErr)

});