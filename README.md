Guessipe
========

Guessipe game is a simple sample app to demonstrate use of Pearson Kitchen Manager 
APIs. Originally presented by Lawrie Nichols at Over The Air 2012 (Bletchly Park) 
as a single page HTML app, live coded.

The file pearson.js contains a simple helper class for accessing the APIs. The 
following parameters need to be set before using it:

  ``pkm.apikey = 'your sandbox or production API key'``
  ``pkm.url = 'http://api.pearson.com/kitchen_manager/v1'``

Note that in the future, there may be newer versions of the API, so use the
appropriate version !

Additional libraries used are jQuery, jQueryMobile and ICanHaz.js (which includes
the Mustache.js library). jQuery handles ajax and general app support, jQueryMobile
is used for the single page support and L&F. ICanHaz used to provide the template 
support with Mustache.js.

Future directions could include paging, true mobile support, error
handling, etc.

This is only an example app, and not finished or tested. Any questions can be mailed to api-developer@.pearson.com
