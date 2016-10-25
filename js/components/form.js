'use strict';

module.export = (function() {
  var _ = {
    forEach: require('lodash/forEach')
  };
  var forms = document.querySelectorAll('form');

  var _init = function() {
    var optionFields = document.querySelectorAll('.c-option__input');

    _.forEach(optionFields, _optionFieldsHandler);
  };

  var _optionFieldsHandler = function() {
    console.log(this);
    // $('input[name="' + this.name + '"]').each(function() {
    //   var $parent = $(this.parentElement);
    //   if (this.checked) {
    //     $parent
    //       .removeClass('c-option--unchecked')
    //       .addClass('c-option--checked');
    //   } else {
    //     $parent
    //       .removeClass('c-option--checked')
    //       .addClass('c-option--unchecked');
    //   }
    // });
  };

  return {
    init: _init
  };
})();
