"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var Backbone = require("backbone")

var myView = Backbone.View.extend({
    el: ".container",
    // $el
    events: {
    	"click .keys span:not(.eval)" : "writeInput",
    	"click .clear":"remove",
    	"click .eval" : "evaluate"
  },

  writeInput:function(e) {
  	document.querySelector('.screen').innerHTML += e.currentTarget.innerText
  },

  remove:function(e) {
  	document.querySelector('.screen').innerHTML = ''
  },

  evaluate:function(e) {
  	document.querySelector('.screen').innerHTML = eval(document.querySelector('.screen').innerText)
  },

initialize: function(){
       
        }
})
var calc = new myView()

// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }
