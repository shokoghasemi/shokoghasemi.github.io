 
(function (window) {
 
var helloSpeaker={};

helloSpeaker.speak = function (name) {
  console.log("Hello"+ name);
};
 
window.helloSpeaker = helloSpeaker;
})(window);
