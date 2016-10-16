'use strict';

module.exports = function(element, eventName) {
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(eventName, false, true);
    element.dispatchEvent(evt);
  } else {
    element.fireEvent("on" + eventName);
  }
};
