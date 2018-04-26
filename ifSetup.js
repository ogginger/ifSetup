//function.js: Functional Logic.

define([ "underscore" ], function( _ ) {
  return function( Input ) {
	if (_.isFunction( Input.Input )) {
		Input.Callback();
	}
  };
});
