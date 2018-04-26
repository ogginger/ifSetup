//test_ifSetup.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "tests/ifSetup_isFunction_CallsCallback",
  "tests/ifSetup_isNotFunction_DoesNothing"
], function(
  TestSuite,
  log,
  ifSetup_isFunction_CallsCallback,
  ifSetup_isNotFunction_DoesNothing
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_ifSetup initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "ifSetup" );
 
      xTestSuite.add(ifSetup_isFunction_CallsCallback);
      xTestSuite.add(ifSetup_isNotFunction_DoesNothing);
      
      xTestSuite.test();
    }
  });
});
