//ifSetup_isFunction_CallsCallback.js: Testing logic.

define([ "ifSetup" ], function( ifSetup ) {
	return {
		"Name":"ifSetup_isFunction_CallsCallback",
		"Input": {
			"Input": function() {}
		},
		"Function": function( Input ) {
			var Result = false;
			ifSetup({
				"Input": Input.Input,
				"Callback": function() {
					Result = true;
				}
			});
			return Result;
		},
		"ExpectedOutput": true
	};
});
