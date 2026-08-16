Writing JavaScript

console.log() — prints output; can take multiple arguments
Comments: // for single line, /* */ for multi-line
Basic arithmetic works directly: +, -, *, /, %, **

Adding JS to a Web Page (3 ways)

Inline — JS directly inside an HTML tag
Internal — <script> tag inside the HTML file
External — separate .js file linked via <script src=""> (preferred; place scripts at the bottom of <body>)
Multiple external scripts are allowed; order matters — main.js should be last

Data Types (Primitives)

Number — integers and floats e.g. -3, 3.14
String — text in single, double, or backtick quotes
Boolean — true or false
Undefined — variable declared but no value assigned
Null — intentional empty value
Use typeof to check a variable's data type

Variables

Declared with let, const, or var
Can declare multiple variables in one line separated by commas
Use descriptive names (camelCase convention).