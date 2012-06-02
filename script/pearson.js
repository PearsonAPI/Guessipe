// Pearson Kitchen Manager APIs
//
// Ensure that jQuery has been loaded before this module
//
var pkm = (function (jQuery) {

  var pkm = {}
  pkm.debug = false

  function err_handler(xhr,status,err) {
    console.log("Ajax error: "+this.url);
    console.log("  - "+status);
    alert("Ajax error "+status)
  }

  function success_handler(fn) {
    return function(data,status,xhr) {
      if (pkm.debug) console.log("Ajax success: "+this.url);
      fn(data)
    }
  }

  var ajax = function(url,params,fn) {
    var data = jQuery.extend({apikey: pkm.apikey},params)
    jQuery.ajax(url,
       { 
        data: data, 
        dataType: 'jsonp', 
        error: err_handler, 
        success: success_handler(fn)
      })
  }

  pkm.cuisines = function(params,fn) {
    ajax(pkm.url+'cuisines.json', params,fn )
  }

  pkm.ingredients = function(params,fn) {
    ajax(pkm.url+'ingredients.json', params,fn)
  }

  pkm.cuisine_recipes = function(id,params, fn) {
    ajax(pkm.url+'cuisines/'+id+'.json', params,fn)
  }

  pkm.recipe = function(id, params, fn) {
    ajax(pkm.url+'recipes/'+id+'.json', params,fn )
  }

  jQuery.urlParam = function(name){ 
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(top.window.location.href); 
    return (results !== null) ? results[1] : 0; 
  }

  pkm.random = function(num) {
    return Math.floor(Math.random()*num)
  }
  
  return pkm
})(jQuery);
