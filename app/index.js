#!/usr/bin/env node
var fs = require('fs');
var clc = require("cli-color");
var prompt = require('prompt');


prompt.start();

prompt.get(['Error', 'Solution', 'Tags'], function(err, res){

console.log(res)

});