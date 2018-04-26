//ifSetup_isNotFunction_DoesNothing.js: Testing logic.

define([ "ifSetup" ], function( ifSetup) {
	return {
		"Name":"ifSetup_isNotFunction_DoesNothing",
		"Input": {
			"Input": {}
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
		"ExpectedOutput": false,
		"Comparator": {
			"Debug": false
		}
	};
});
