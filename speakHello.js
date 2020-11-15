 
(function (window) {
 
var helloSpeaker;
 
var speakWord = "Hello";
 var helloSpeak=function (name) {
  console.log(speakWord + " " + name);
}
 
helloSpeaker.speak = helloSpeak;
 
window.helloSpeaker = helloSpeaker;
})(window);
