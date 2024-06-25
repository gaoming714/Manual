# nodejs AlphaBeta

## registry
npm config set registry https://registry.npm.taobao.org
> C:\Users\Administrator

npm config -g set registry https://registry.npm.taobao.org
> D:\Portable\nodejs\etc\npmrc

## check
npm config ls -l

npm outdated


## nodejs in action

### export

module.exports = app;
exports.app = func;


### net.Socket
https://www.runoob.com/nodejs/nodejs-net-module.html


### Headroom.js

Give your pages some headroom. Hide your header until you need it. 
https://wicky.nillia.ms/headroom.js/


## jquery

### DOM Traversal and Manipulation

Get the <button> element with the class 'continue' and change its HTML to 'Next Step...'

$( "button.continue" ).html( "Next Step..." )

### Event Handling

Show the #banner-message element that is hidden with display:none in its CSS when any button in #button-container is clicked.

var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
});

### Ajax

Call a local script on the server /api/getWeather with the query parameter zipcode=97201 and replace the element #weather-temp's html with the returned text.

$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});

### demo
A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

Experienced developers sometimes use the shorthand $() for $( document ).ready(). If you are writing code that people who aren't experienced with jQuery may see, it's best to use the long form.

// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

You can also pass a named function to $( document ).ready() instead of passing an anonymous function.

// Passing a named function instead of an anonymous function.
function readyFn( jQuery ) {
    // Code to run when the document is ready.
}
$( document ).ready( readyFn );
// or:
$( window ).on( "load", readyFn );
