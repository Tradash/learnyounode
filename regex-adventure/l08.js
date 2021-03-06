/*

Strings in javascript have a `.split()` method. `.split()` takes an argument
that can be a string or a regex.

Write a module that accepts a string as its argument and returns an array that
splits the string on commas separated by arbitrary amounts of whitespace.

Here's a template that you can use:

  module.exports = function (str) {
    return str.split(/* ... your regex goes here ... *)
  }

Remember that `\s` is a shortcut for whitespace characters `[ \t\r\n\f]`.

To verify your solution, run:

  regex-adventure verify solution.js

*/

module.exports = function (str) {
	return str.split(/\s*,\s*/);
	///\d+\.jpe?g$/.test(str);
};

//console.log('beep boop');
