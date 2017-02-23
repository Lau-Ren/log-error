var fs = require('fs');
var clc = require("cli-color");
var prompt = require('prompt');

console.log('in');
prompt.start();

prompt.get(['Error', 'Solution', 'Tags'], function(err, res){

console.log(res)

});