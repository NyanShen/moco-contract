#!/usr/bin/env node

var fs = require('fs');
var result=[];//字典

var readDir = function(dir){
    var files = fs.readdirSync(dir);
    files.forEach(function(file){
        var stats = fs.statSync(dir+'/'+file);
        if(stats.isFile()&&file.indexOf(".json")!==-1){
            result.push('include:'+dir+'/'+file);
        }
        if(stats.isDirectory()){
            readDir(dir+'/'+file);
        }
    });
};
readDir('react-api');
fs.writeFileSync('api.json',JSON.stringify(result,null,2));