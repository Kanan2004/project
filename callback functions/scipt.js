"use strict";

function first() {
    // Do smth
    setTimeout(function() {
        console.log(1);

    }, 500);
}

function second() {
    console.log(2);
}

first();
second(); 

function learn(lang, callback) {
    console.log(`ya uchu: ${lang}`);
    callback();
}

function done(){
    console.log('ya prowel etot urok')
};

learn('javascript', done);