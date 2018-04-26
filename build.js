//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"jquery": "empty:",
	"log": "lib/log.min"
    },
    exclude: [ "jquery", "underscore" ],
    name: "ifSetup",
    out: "ifSetup.min.js"
})
