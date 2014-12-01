// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.easing.min.js
//= require bootstrap.min.js
//= require turbolinks
//= require_tree .


// RailsAjax
//= require jquery.history
//= require jquery.rails-ajax
//= require RailsAjax-Config


var ready = function(){
  $('#hide-sidebar').click(function() {
    $('#sidebar').slideToggle();
  });

  $('#help-button').click(function() {
    $('#help-sidebar').toggle();
  });

};
$(document).ready(ready);
$(document).on('page:load', ready);
