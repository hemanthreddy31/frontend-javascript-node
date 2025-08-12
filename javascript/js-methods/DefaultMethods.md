comprehensive reference document containing all of vanilla JavaScript's built-in methods and APIs. The reference covers:

Core JavaScript language features:

Array methods (mutator, accessor, iteration)
String methods
Number methods
Math object
Date methods
Object methods
Function methods
Promise methods
Maps and Sets
RegExp methods
JSON methods
TypedArray methods
Error handling


Browser APIs:

DOM manipulation
Storage (localStorage, sessionStorage)
Fetch API
Web Workers
Canvas API
Audio API
WebRTC
Internationalization


Modern JavaScript features:

Stream API
Structured Clone API
Temporal API proposal
Observers (Resize, Intersection, Mutation)
# JavaScript Built-in Methods Reference

## Array Methods

### Mutator Methods (modify the original array)
- `Array.prototype.pop()` - Removes the last element and returns it
- `Array.prototype.push()` - Adds elements to the end of an array
- `Array.prototype.shift()` - Removes the first element and returns it
- `Array.prototype.unshift()` - Adds elements to the beginning of an array
- `Array.prototype.splice()` - Adds/removes elements from an array
- `Array.prototype.sort()` - Sorts the elements of an array
- `Array.prototype.reverse()` - Reverses the order of elements
- `Array.prototype.copyWithin()` - Copies array elements within the array
- `Array.prototype.fill()` - Fills array elements with a static value

### Accessor Methods (return a new value or representation)
- `Array.prototype.concat()` - Joins arrays and returns a new array
- `Array.prototype.join()` - Joins all elements into a string
- `Array.prototype.slice()` - Returns selected elements as a new array
- `Array.prototype.indexOf()` - Returns the first index of an element
- `Array.prototype.lastIndexOf()` - Returns the last index of an element
- `Array.prototype.includes()` - Determines if an array includes a value
- `Array.prototype.toString()` - Returns a string representing the array
- `Array.prototype.toLocaleString()` - Returns a localized string
- `Array.prototype.at()` - Returns the element at the specified index

### Iteration Methods
- `Array.prototype.forEach()` - Calls a function for each element
- `Array.prototype.map()` - Creates a new array with the results of calling a function
- `Array.prototype.filter()` - Creates a new array with elements that pass a test
- `Array.prototype.reduce()` - Reduces the array to a single value (left-to-right)
- `Array.prototype.reduceRight()` - Reduces the array to a single value (right-to-left)
- `Array.prototype.every()` - Checks if all elements pass a test
- `Array.prototype.some()` - Checks if any elements pass a test
- `Array.prototype.find()` - Returns the first element that passes a test
- `Array.prototype.findIndex()` - Returns the index of the first element that passes a test
- `Array.prototype.findLast()` - Returns the last element that passes a test
- `Array.prototype.findLastIndex()` - Returns the index of the last element that passes a test
- `Array.prototype.entries()` - Returns a key/value pair Array Iteration Object
- `Array.prototype.keys()` - Returns an Array Iteration Object with keys
- `Array.prototype.values()` - Returns an Array Iteration Object with values
- `Array.prototype.flatMap()` - Maps each element, then flattens the result
- `Array.prototype.flat()` - Creates a new array with sub-array elements concatenated
- `Array.prototype.with()` - Returns a new array with a specified element replaced
- `Array.prototype.toSorted()` - Returns a new sorted array without modifying original
- `Array.prototype.toReversed()` - Returns a new reversed array without modifying original
- `Array.prototype.toSpliced()` - Returns a new array with added/removed elements without modifying original

### Static Array Methods
- `Array.from()` - Creates a new array from an array-like or iterable object
- `Array.isArray()` - Checks if an object is an array
- `Array.of()` - Creates a new array with the passed arguments

## String Methods
- `String.prototype.charAt()` - Returns the character at the specified index
- `String.prototype.charCodeAt()` - Returns the Unicode of the character at the specified index
- `String.prototype.codePointAt()` - Returns a Unicode code point value
- `String.prototype.concat()` - Joins two or more strings
- `String.prototype.endsWith()` - Checks if a string ends with specified string/characters
- `String.prototype.includes()` - Checks if string contains a specified value
- `String.prototype.indexOf()` - Returns the position of the first found occurrence
- `String.prototype.lastIndexOf()` - Returns the position of the last found occurrence
- `String.prototype.localeCompare()` - Compares two strings in the current locale
- `String.prototype.match()` - Searches a string for a match against a regular expression
- `String.prototype.matchAll()` - Returns an iterator of all matches
- `String.prototype.normalize()` - Returns the Unicode Normalization Form of a string
- `String.prototype.padEnd()` - Pads the end of a string with a specified string
- `String.prototype.padStart()` - Pads the start of a string with a specified string
- `String.prototype.repeat()` - Returns a new string with copies of the original
- `String.prototype.replace()` - Replaces text in a string using a regex or string
- `String.prototype.replaceAll()` - Replaces all occurrences of a string
- `String.prototype.search()` - Searches a string for a specified value or regular expression
- `String.prototype.slice()` - Extracts a part of a string and returns a new string
- `String.prototype.split()` - Splits a string into an array of substrings
- `String.prototype.startsWith()` - Checks if a string begins with specified characters
- `String.prototype.substring()` - Extracts characters from a string
- `String.prototype.substr()` - Extracts parts of a string, specified by start and length
- `String.prototype.toLowerCase()` - Converts a string to lowercase letters
- `String.prototype.toUpperCase()` - Converts a string to uppercase letters
- `String.prototype.toLocaleLowerCase()` - Converts a string to lowercase respecting locale
- `String.prototype.toLocaleUpperCase()` - Converts a string to uppercase respecting locale
- `String.prototype.toString()` - Returns the string
- `String.prototype.trim()` - Removes whitespace from both ends
- `String.prototype.trimStart()` / `trimLeft()` - Removes whitespace from the beginning
- `String.prototype.trimEnd()` / `trimRight()` - Removes whitespace from the end
- `String.prototype.valueOf()` - Returns the primitive value of a String object
- `String.prototype.at()` - Returns the character at a specified index
- `String.prototype.isWellFormed()` - Checks if a string contains valid UTF-16 code points
- `String.prototype.toWellFormed()` - Returns a new string with ill-formed UTF-16 code points replaced

### Static String Methods
- `String.fromCharCode()` - Converts Unicode values to characters
- `String.fromCodePoint()` - Returns a string created by using the specified code points
- `String.raw()` - Returns a string where backslashes are interpreted literally

## Number Methods
- `Number.prototype.toExponential()` - Returns a string with number rounded and in exponential notation
- `Number.prototype.toFixed()` - Returns a string with number with specified number of decimals
- `Number.prototype.toLocaleString()` - Returns a string with a language-sensitive representation
- `Number.prototype.toPrecision()` - Returns a string with a specified length
- `Number.prototype.toString()` - Returns a string representing the number
- `Number.prototype.valueOf()` - Returns the primitive value of a Number object

### Static Number Methods and Properties
- `Number.isNaN()` - Determines whether a value is NaN or not
- `Number.isFinite()` - Determines whether a value is a finite number
- `Number.isInteger()` - Determines whether a value is an integer
- `Number.isSafeInteger()` - Determines whether a value is a safe integer
- `Number.parseFloat()` - Parses a string and returns a floating point number
- `Number.parseInt()` - Parses a string and returns an integer
- `Number.MAX_VALUE` - Returns the largest possible number
- `Number.MIN_VALUE` - Returns the smallest possible number
- `Number.NEGATIVE_INFINITY` - Represents negative infinity
- `Number.POSITIVE_INFINITY` - Represents infinity
- `Number.MAX_SAFE_INTEGER` - Maximum safe integer value
- `Number.MIN_SAFE_INTEGER` - Minimum safe integer value
- `Number.EPSILON` - Difference between 1 and the smallest floating point number > 1

## Math Object Methods
- `Math.abs()` - Returns the absolute value
- `Math.acos()` - Returns the arccosine in radians
- `Math.acosh()` - Returns the hyperbolic arccosine
- `Math.asin()` - Returns the arcsine in radians
- `Math.asinh()` - Returns the hyperbolic arcsine
- `Math.atan()` - Returns the arctangent in radians
- `Math.atan2()` - Returns the arctangent of the quotient of its arguments
- `Math.atanh()` - Returns the hyperbolic arctangent
- `Math.cbrt()` - Returns the cube root
- `Math.ceil()` - Rounds up to the nearest integer
- `Math.clz32()` - Returns the number of leading zeros in a 32-bit binary representation
- `Math.cos()` - Returns the cosine
- `Math.cosh()` - Returns the hyperbolic cosine
- `Math.exp()` - Returns e^x
- `Math.expm1()` - Returns e^x - 1
- `Math.floor()` - Rounds down to the nearest integer
- `Math.fround()` - Returns the nearest 32-bit single precision float
- `Math.hypot()` - Returns the square root of the sum of squares of its arguments
- `Math.imul()` - Returns the result of a 32-bit integer multiplication
- `Math.log()` - Returns the natural logarithm
- `Math.log10()` - Returns the base-10 logarithm
- `Math.log1p()` - Returns the natural logarithm of 1 + x
- `Math.log2()` - Returns the base-2 logarithm
- `Math.max()` - Returns the largest value
- `Math.min()` - Returns the smallest value
- `Math.pow()` - Returns the value of x to the power of y
- `Math.random()` - Returns a random number between 0 and 1
- `Math.round()` - Rounds to the nearest integer
- `Math.sign()` - Returns the sign of a number
- `Math.sin()` - Returns the sine
- `Math.sinh()` - Returns the hyperbolic sine
- `Math.sqrt()` - Returns the square root
- `Math.tan()` - Returns the tangent
- `Math.tanh()` - Returns the hyperbolic tangent
- `Math.trunc()` - Returns the integer part of a number

## Date Methods
- `Date.prototype.getDate()` - Returns the day of the month (1-31)
- `Date.prototype.getDay()` - Returns the day of the week (0-6)
- `Date.prototype.getFullYear()` - Returns the year (4 digits)
- `Date.prototype.getHours()` - Returns the hour (0-23)
- `Date.prototype.getMilliseconds()` - Returns the milliseconds (0-999)
- `Date.prototype.getMinutes()` - Returns the minutes (0-59)
- `Date.prototype.getMonth()` - Returns the month (0-11)
- `Date.prototype.getSeconds()` - Returns the seconds (0-59)
- `Date.prototype.getTime()` - Returns the time in milliseconds since January 1, 1970
- `Date.prototype.getTimezoneOffset()` - Returns the time difference between UTC and local time in minutes
- `Date.prototype.getUTCDate()` - Returns the UTC day of the month (1-31)
- `Date.prototype.getUTCDay()` - Returns the UTC day of the week (0-6)
- `Date.prototype.getUTCFullYear()` - Returns the UTC year (4 digits)
- `Date.prototype.getUTCHours()` - Returns the UTC hour (0-23)
- `Date.prototype.getUTCMilliseconds()` - Returns the UTC milliseconds (0-999)
- `Date.prototype.getUTCMinutes()` - Returns the UTC minutes (0-59)
- `Date.prototype.getUTCMonth()` - Returns the UTC month (0-11)
- `Date.prototype.getUTCSeconds()` - Returns the UTC seconds (0-59)
- `Date.prototype.setDate()` - Sets the day of the month
- `Date.prototype.setFullYear()` - Sets the year
- `Date.prototype.setHours()` - Sets the hour
- `Date.prototype.setMilliseconds()` - Sets the milliseconds
- `Date.prototype.setMinutes()` - Sets the minutes
- `Date.prototype.setMonth()` - Sets the month
- `Date.prototype.setSeconds()` - Sets the seconds
- `Date.prototype.setTime()` - Sets the time
- `Date.prototype.setUTCDate()` - Sets the UTC day of the month
- `Date.prototype.setUTCFullYear()` - Sets the UTC year
- `Date.prototype.setUTCHours()` - Sets the UTC hour
- `Date.prototype.setUTCMilliseconds()` - Sets the UTC milliseconds
- `Date.prototype.setUTCMinutes()` - Sets the UTC minutes
- `Date.prototype.setUTCMonth()` - Sets the UTC month
- `Date.prototype.setUTCSeconds()` - Sets the UTC seconds
- `Date.prototype.toDateString()` - Returns the date portion as a string
- `Date.prototype.toISOString()` - Returns the date as a string in ISO format
- `Date.prototype.toJSON()` - Returns the date as a string in JSON format
- `Date.prototype.toLocaleDateString()` - Returns the date portion as a locale string
- `Date.prototype.toLocaleString()` - Returns the date as a locale string
- `Date.prototype.toLocaleTimeString()` - Returns the time portion as a locale string
- `Date.prototype.toString()` - Returns the date as a string
- `Date.prototype.toTimeString()` - Returns the time portion as a string
- `Date.prototype.toUTCString()` - Returns the date as a string in UTC format
- `Date.prototype.valueOf()` - Returns the primitive value of a Date object

### Static Date Methods
- `Date.now()` - Returns the number of milliseconds since January 1, 1970
- `Date.parse()` - Parses a date string and returns the number of milliseconds since January 1, 1970
- `Date.UTC()` - Returns the number of milliseconds since January 1, 1970 in UTC

## Object Methods
- `Object.prototype.hasOwnProperty()` - Returns a boolean indicating if the object has the specified property
- `Object.prototype.isPrototypeOf()` - Returns a boolean indicating if an object exists in another object's prototype chain
- `Object.prototype.propertyIsEnumerable()` - Returns a boolean indicating if the specified property is enumerable
- `Object.prototype.toLocaleString()` - Returns a string representation of the object
- `Object.prototype.toString()` - Returns a string representation of the object
- `Object.prototype.valueOf()` - Returns the primitive value of the specified object

### Static Object Methods
- `Object.assign()` - Copies the values of all enumerable properties from one or more source objects
- `Object.create()` - Creates a new object with the specified prototype object and properties
- `Object.defineProperty()` - Adds a property to an object, or modifies attributes of an existing property
- `Object.defineProperties()` - Adds multiple properties to an object, or modifies attributes of existing properties
- `Object.entries()` - Returns an array of a given object's own enumerable property [key, value] pairs
- `Object.freeze()` - Freezes an object (cannot be changed)
- `Object.fromEntries()` - Transforms a list of key-value pairs into an object
- `Object.getOwnPropertyDescriptor()` - Returns a property descriptor for a property
- `Object.getOwnPropertyDescriptors()` - Returns all property descriptors for an object
- `Object.getOwnPropertyNames()` - Returns an array of all properties found directly in a given object
- `Object.getOwnPropertySymbols()` - Returns an array of all symbol properties found in a given object
- `Object.getPrototypeOf()` - Returns the prototype of the specified object
- `Object.is()` - Determines whether two values are the same value
- `Object.isExtensible()` - Determines if extending an object is allowed
- `Object.isFrozen()` - Determines if an object is frozen
- `Object.isSealed()` - Determines if an object is sealed
- `Object.keys()` - Returns an array of a given object's own enumerable property names
- `Object.preventExtensions()` - Prevents new properties from being added to an object
- `Object.seal()` - Prevents other code from deleting properties of an object
- `Object.setPrototypeOf()` - Sets the prototype of an object
- `Object.values()` - Returns an array of a given object's own enumerable property values
- `Object.hasOwn()` - Returns a boolean indicating if the object has the specified property as its own property
- `Object.groupBy()` - Groups the elements according to the string values returned by a callback function

## Function Methods
- `Function.prototype.apply()` - Calls a function with a given this value and arguments provided as an array
- `Function.prototype.bind()` - Creates a new function that, when called, has its this keyword set to the provided value
- `Function.prototype.call()` - Calls a function with a given this value and arguments provided individually
- `Function.prototype.toString()` - Returns a string representing the source code of the function

## Promise Methods
- `Promise.prototype.catch()` - Handles rejected promises
- `Promise.prototype.then()` - Handles resolved promises
- `Promise.prototype.finally()` - Executes code regardless of the promise's outcome

### Static Promise Methods
- `Promise.all()` - Returns a promise that resolves when all promises in the iterable have resolved
- `Promise.allSettled()` - Returns a promise that resolves when all promises have settled
- `Promise.any()` - Returns a promise that resolves when any of the promises resolves
- `Promise.race()` - Returns a promise that resolves or rejects as soon as one of the promises resolves or rejects
- `Promise.reject()` - Returns a Promise object that is rejected
- `Promise.resolve()` - Returns a Promise object that is resolved

## Map Methods
- `Map.prototype.clear()` - Removes all elements from a Map
- `Map.prototype.delete()` - Removes a specified element from a Map
- `Map.prototype.entries()` - Returns an iterator with key/value pairs
- `Map.prototype.forEach()` - Executes a function for each key/value pair
- `Map.prototype.get()` - Returns the value associated with a specified key
- `Map.prototype.has()` - Returns a boolean indicating whether a Map contains a specified key
- `Map.prototype.keys()` - Returns an iterator with the keys
- `Map.prototype.set()` - Sets the value for a key in a Map
- `Map.prototype.values()` - Returns an iterator with the values
- `Map.prototype.size` - Returns the number of elements in a Map

## Set Methods
- `Set.prototype.add()` - Adds a new element to a Set
- `Set.prototype.clear()` - Removes all elements from a Set
- `Set.prototype.delete()` - Removes a specified value from a Set
- `Set.prototype.entries()` - Returns an iterator with [value, value] pairs
- `Set.prototype.forEach()` - Executes a function for each element
- `Set.prototype.has()` - Returns a boolean indicating whether a Set contains a specified value
- `Set.prototype.keys()` - Same as values()
- `Set.prototype.values()` - Returns an iterator with the values
- `Set.prototype.size` - Returns the number of elements in a Set

## WeakMap Methods
- `WeakMap.prototype.delete()` - Removes a specified element from a WeakMap
- `WeakMap.prototype.get()` - Returns the value associated with a specified key
- `WeakMap.prototype.has()` - Returns a boolean indicating whether a WeakMap contains a specified key
- `WeakMap.prototype.set()` - Sets the value for a key in a WeakMap

## WeakSet Methods
- `WeakSet.prototype.add()` - Adds a new element to a WeakSet
- `WeakSet.prototype.delete()` - Removes a specified value from a WeakSet
- `WeakSet.prototype.has()` - Returns a boolean indicating whether a WeakSet contains a specified value

## RegExp Methods
- `RegExp.prototype.exec()` - Executes a search for a match in a string and returns an array of information
- `RegExp.prototype.test()` - Tests for a match in a string and returns true or false
- `RegExp.prototype.toString()` - Returns a string representing the regular expression
- `RegExp.prototype.dotAll` - Whether . matches newlines
- `RegExp.prototype.flags` - Returns a string containing the flags
- `RegExp.prototype.global` - Whether the "g" flag is used
- `RegExp.prototype.ignoreCase` - Whether the "i" flag is used
- `RegExp.prototype.multiline` - Whether the "m" flag is used
- `RegExp.prototype.source` - Returns the text pattern
- `RegExp.prototype.sticky` - Whether the "y" flag is used
- `RegExp.prototype.unicode` - Whether the "u" flag is used

## JSON Methods
- `JSON.parse()` - Parses a JSON string and returns a JavaScript value
- `JSON.stringify()` - Converts a JavaScript value to a JSON string

## TypedArray Methods (shared by Int8Array, Uint8Array, etc.)
- `TypedArray.prototype.copyWithin()` - Copies array elements within the array
- `TypedArray.prototype.entries()` - Returns an iterator with key/value pairs
- `TypedArray.prototype.every()` - Checks if all elements pass a test
- `TypedArray.prototype.fill()` - Fills the array with a static value
- `TypedArray.prototype.filter()` - Creates a new array with elements that pass a test
- `TypedArray.prototype.find()` - Returns the first element that passes a test
- `TypedArray.prototype.findIndex()` - Returns the index of the first element that passes a test
- `TypedArray.prototype.forEach()` - Calls a function for each element
- `TypedArray.prototype.includes()` - Determines whether an array includes a value
- `TypedArray.prototype.indexOf()` - Returns the first index of an element
- `TypedArray.prototype.join()` - Joins all elements into a string
- `TypedArray.prototype.keys()` - Returns an iterator with the keys
- `TypedArray.prototype.lastIndexOf()` - Returns the last index of an element
- `TypedArray.prototype.map()` - Creates a new array with the results of calling a function
- `TypedArray.prototype.reduce()` - Reduces the array to a single value
- `TypedArray.prototype.reduceRight()` - Reduces the array to a single value (right-to-left)
- `TypedArray.prototype.reverse()` - Reverses the order of elements
- `TypedArray.prototype.set()` - Sets multiple values in the typed array
- `TypedArray.prototype.slice()` - Returns selected elements as a new array
- `TypedArray.prototype.some()` - Checks if any elements pass a test
- `TypedArray.prototype.sort()` - Sorts the elements of an array
- `TypedArray.prototype.subarray()` - Returns a new TypedArray from begin to end
- `TypedArray.prototype.toString()` - Returns a string representing the array
- `TypedArray.prototype.values()` - Returns an iterator with the values

## ArrayBuffer Methods
- `ArrayBuffer.prototype.slice()` - Returns a new ArrayBuffer with a portion of this ArrayBuffer
- `ArrayBuffer.prototype.byteLength` - Returns the length of an ArrayBuffer in bytes

### Static ArrayBuffer Methods
- `ArrayBuffer.isView()` - Returns true if arg is a view on an ArrayBuffer

## DataView Methods
- `DataView.prototype.getInt8()` - Gets an 8-bit signed integer
- `DataView.prototype.getUint8()` - Gets an 8-bit unsigned integer
- `DataView.prototype.getInt16()` - Gets a 16-bit signed integer
- `DataView.prototype.getUint16()` - Gets a 16-bit unsigned integer
- `DataView.prototype.getInt32()` - Gets a 32-bit signed integer
- `DataView.prototype.getUint32()` - Gets a 32-bit unsigned integer
- `DataView.prototype.getFloat32()` - Gets a 32-bit float
- `DataView.prototype.getFloat64()` - Gets a 64-bit float
- `DataView.prototype.getBigInt64()` - Gets a 64-bit signed integer
- `DataView.prototype.getBigUint64()` - Gets a 64-bit unsigned integer
- `DataView.prototype.setInt8()` - Sets an 8-bit signed integer
- `DataView.prototype.setUint8()` - Sets an 8-bit unsigned integer
- `DataView.prototype.setInt16()` - Sets a 16-bit signed integer
- `DataView.prototype.setUint16()` - Sets a 16-bit unsigned integer
- `DataView.prototype.setInt32()` - Sets a 32-bit signed integer
- `DataView.prototype.setUint32()` - Sets a 32-bit unsigned integer
- `DataView.prototype.setFloat32()` - Sets a 32-bit float
- `DataView.prototype.setFloat64()` - Sets a 64-bit float
- `DataView.prototype.setBigInt64()` - Sets a 64-bit signed integer
- `DataView.prototype.setBigUint64()` - Sets a 64-bit unsigned integer

## Global Methods
- `eval()` - Evaluates JavaScript code represented as a string
- `isFinite()` - Determines whether a value is a finite number
- `isNaN()` - Determines whether a value is NaN
- `parseFloat()` - Parses a string and returns a floating point number
- `parseInt()` - Parses a string and returns an integer
- `encodeURI()` - Encodes a URI
- `encodeURIComponent()` - Encodes a URI component
- `decodeURI()` - Decodes a URI
- `decodeURIComponent()` - Decodes a URI component
- `escape()` - Encodes a string (deprecated)
- `unescape()` - Decodes a string (deprecated)

## Symbol Methods
- `Symbol.for()` - Returns a symbol with a given key from the global symbol registry
- `Symbol.keyFor()` - Returns a shared symbol key from the global symbol registry
- `Symbol.prototype.toString()` - Returns a string containing the description of the Symbol
- `Symbol.prototype.valueOf()` - Returns the primitive value of a Symbol object

## BigInt Methods
- `BigInt.prototype.toString()` - Returns a string representing the BigInt value
- `BigInt.prototype.valueOf()` - Returns the primitive value of a BigInt object
- `BigInt.prototype.toLocaleString()` - Returns a language-sensitive string representing the BigInt value
- `BigInt.asIntN()` - Clamps a BigInt value to a signed integer value
- `BigInt.asUintN()` - Clamps a BigInt value to an unsigned integer value

## Intl Object Methods
- `Intl.Collator()` - Constructor for collators (string comparison)
- `Intl.DateTimeFormat()` - Constructor for date and time formatters
- `Intl.DisplayNames()` - Constructor for display names formatters
- `Intl.ListFormat()` - Constructor for list formatters
- `Intl.Locale()` - Constructor for locale information
- `Intl.NumberFormat()` - Constructor for number formatters
- `Intl.PluralRules()` - Constructor for plural-sensitive formatting
- `Intl.RelativeTimeFormat()` - Constructor for relative time formatters
- `Intl.Segmenter()` - Constructor for text segmenters

## Console Methods
- `console.assert()` - Writes an error message if assertion is false
- `console.clear()` - Clears the console
- `console.count()` - Logs the number of times this line has been called
- `console.countReset()` - Resets counter used with console.count()
- `console.debug()` - Outputs a debug message
- `console.dir()` - Displays an interactive list of properties of a specified object
- `console.dirxml()` - Displays an XML/HTML Element representation
- `console.error()` - Outputs an error message
- `console.group()` - Creates a new inline group in the console
- `console.groupCollapsed()` - Creates a new inline group in the console that is collapsed
- `console.groupEnd()` - Exits the current inline group
- `console.info()` - Outputs an informational message
- `console.log()` - Outputs a message to the console
- `console.table()` - Displays tabular data as a table
- `console.time()` - Starts a timer
- `console.timeEnd()` - Ends a timer and logs the result
- `console.timeLog()` - Logs the current value of a timer
- `console.trace()` - Outputs a stack trace
- `console.warn()` - Outputs a warning message

## URL API Methods
- `URL.prototype.toString()` - Returns the entire URL
- `URL.prototype.toJSON()` - Returns the entire URL
- `URL.createObjectURL()` - Creates a URL for a File or Blob object
- `URL.revokeObjectURL()` - Revokes a URL created by createObjectURL()

## URLSearchParams Methods
- `URLSearchParams.prototype.append()` - Appends a new name-value pair
- `URLSearchParams.prototype.delete()` - Deletes name-value pairs
- `URLSearchParams.prototype.entries()` - Returns an iterator of all key-value pairs
- `URLSearchParams.prototype.forEach()` - Executes a function for each key-value pair
- `URLSearchParams.prototype.get()` - Returns the first value of a parameter
- `URLSearchParams.prototype.getAll()` - Returns all values of a parameter
- `URLSearchParams.prototype.has()` - Returns a boolean indicating if parameter exists
- `URLSearchParams.prototype.keys()` - Returns an iterator of all keys
- `URLSearchParams.prototype.set()` - Sets or updates a parameter
- `URLSearchParams.prototype.sort()` - Sorts all key-value pairs
- `URLSearchParams.prototype.toString()` - Returns a string representing the search parameters
- `URLSearchParams.prototype.values()` - Returns an iterator of all values

## WebAssembly Methods
- `WebAssembly.compile()` - Compiles WebAssembly binary code
- `WebAssembly.instantiate()` - Compiles and instantiates WebAssembly module
- `WebAssembly.validate()` - Validates WebAssembly binary code
- `WebAssembly.compileStreaming()` - Compiles WebAssembly from streaming source
- `WebAssembly.instantiateStreaming()` - Compiles and instantiates from streaming source

## Proxy Methods
- `Proxy.revocable()` - Creates a revocable Proxy object

## Reflect Methods
- `Reflect.apply()` - Calls a target function with arguments
- `Reflect.construct()` - Acts like the new operator as a function
- `Reflect.defineProperty()` - Defines a property on an object
- `Reflect.deleteProperty()` - Deletes a property from an object
- `Reflect.get()` - Gets a property from an object
- `Reflect.getOwnPropertyDescriptor()` - Gets a property descriptor
- `Reflect.getPrototypeOf()` - Gets the prototype of an object
- `Reflect.has()` - Checks if an object has a property
- `Reflect.isExtensible()` - Checks if an object can have new properties
- `Reflect.ownKeys()` - Returns all own property keys
- `Reflect.preventExtensions()` - Prevents adding properties to an object
- `Reflect.set()` - Sets a property on an object
- `Reflect.setPrototypeOf()` - Sets the prototype of an object

## AtomicOperations Methods
- `Atomics.add()` - Adds a value to the value at a given position in the array and returns the old value
- `Atomics.and()` - Performs a bitwise AND on values
- `Atomics.compareExchange()` - Exchanges value if matches expected value
- `Atomics.exchange()` - Exchanges a value at a given position in the array
- `Atomics.isLockFree()` - Tests whether the size is lock-free
- `Atomics.load()` - Returns the value at a given position in the array
- `Atomics.notify()` - Notifies agents waiting on a position in an array
- `Atomics.or()` - Performs a bitwise OR on values
- `Atomics.store()` - Stores a value at a given position in the array
- `Atomics.sub()` - Subtracts a value at a given position in the array
- `Atomics.wait()` - Verifies if a value at the given position is equal to a specific value, and if it is, sleeps until awoken
- `Atomics.xor()` - Performs a bitwise XOR on values

## SharedArrayBuffer Methods
- `SharedArrayBuffer.prototype.byteLength` - Returns the length of a SharedArrayBuffer in bytes
- `SharedArrayBuffer.prototype.slice()` - Returns a new SharedArrayBuffer with a portion of this buffer

## Error Methods and Properties
- `Error.prototype.message` - Error message
- `Error.prototype.name` - Error name
- `Error.prototype.stack` - Stack trace
- `Error.prototype.toString()` - Returns a string representing the error
- `Error.prototype.cause` - Returns the cause of the error (if specified)

### Error Constructors/Types
- `Error()` - Base error constructor
- `EvalError()` - Error in eval() function
- `RangeError()` - Number outside of valid range
- `ReferenceError()` - Invalid reference
- `SyntaxError()` - Syntax error
- `TypeError()` - Type error
- `URIError()` - Error in encodeURI() or decodeURI()
- `AggregateError()` - Represents multiple errors wrapped in a single error

## Generators and Iterators
- `Generator.prototype.next()` - Returns the next value in a generator
- `Generator.prototype.return()` - Returns value and finishes generator
- `Generator.prototype.throw()` - Throws error and returns next value
- `Iterator.prototype.next()` - Returns the next element in an iterator

## Structured Clone API
- `structuredClone()` - Creates a deep copy of objects including those with circular references

## Performance API
- `performance.now()` - Returns high-resolution timestamp in milliseconds
- `performance.mark()` - Creates a timestamp in the browser's performance entry buffer
- `performance.measure()` - Creates a named timestamp between two marks
- `performance.getEntries()` - Returns a list of all performance entries
- `performance.getEntriesByType()` - Returns entries of the given type
- `performance.getEntriesByName()` - Returns entries with the given name
- `performance.clearMarks()` - Removes marks from the performance timeline
- `performance.clearMeasures()` - Removes measures from the performance timeline
- `performance.timeOrigin` - Returns the high-resolution timestamp of the start time

## Crypto API Methods
- `crypto.getRandomValues()` - Fills array with cryptographically secure random values
- `crypto.randomUUID()` - Generates a random UUID
- `crypto.subtle.encrypt()` - Encrypts data
- `crypto.subtle.decrypt()` - Decrypts data
- `crypto.subtle.sign()` - Signs data
- `crypto.subtle.verify()` - Verifies a signature
- `crypto.subtle.digest()` - Generates a digest of data
- `crypto.subtle.generateKey()` - Generates a new key
- `crypto.subtle.deriveKey()` - Derives a key from a master key
- `crypto.subtle.deriveBits()` - Derives bits from a master key
- `crypto.subtle.importKey()` - Imports a key
- `crypto.subtle.exportKey()` - Exports a key
- `crypto.subtle.wrapKey()` - Wraps a key
- `crypto.subtle.unwrapKey()` - Unwraps a key

## Encoding API Methods
- `TextEncoder.prototype.encode()` - Encodes a string into UTF-8 bytes
- `TextEncoder.prototype.encodeInto()` - Encodes a string into a destination buffer
- `TextDecoder.prototype.decode()` - Decodes bytes to a string

## Blob Methods
- `Blob.prototype.slice()` - Returns a new Blob object containing a portion of this blob
- `Blob.prototype.text()` - Returns a promise that resolves with a string
- `Blob.prototype.arrayBuffer()` - Returns a promise that resolves with an ArrayBuffer
- `Blob.prototype.stream()` - Returns a ReadableStream of the blob contents

## File Methods
- `File.prototype.slice()` - Returns a new Blob object containing a portion of this file
- `File.prototype.text()` - Returns a promise that resolves with a string
- `File.prototype.arrayBuffer()` - Returns a promise that resolves with an ArrayBuffer
- `File.prototype.stream()` - Returns a ReadableStream of the file contents

## FileReader Methods
- `FileReader.prototype.readAsArrayBuffer()` - Reads a file as an ArrayBuffer
- `FileReader.prototype.readAsBinaryString()` - Reads a file as a binary string
- `FileReader.prototype.readAsDataURL()` - Reads a file as a data URL
- `FileReader.prototype.readAsText()` - Reads a file as text
- `FileReader.prototype.abort()` - Aborts the read operation

## FormData Methods
- `FormData.prototype.append()` - Appends a new value to an existing key or adds the key if it doesn't exist
- `FormData.prototype.delete()` - Deletes a key and its values
- `FormData.prototype.entries()` - Returns an iterator of key/value pairs
- `FormData.prototype.forEach()` - Executes a callback for each key/value pair
- `FormData.prototype.get()` - Returns the first value associated with a key
- `FormData.prototype.getAll()` - Returns all values associated with a key
- `FormData.prototype.has()` - Returns a boolean indicating whether a key exists
- `FormData.prototype.keys()` - Returns an iterator of keys
- `FormData.prototype.set()` - Sets a new value for an existing key or adds the key if it doesn't exist
- `FormData.prototype.values()` - Returns an iterator of values

## Storage API Methods
- `localStorage.getItem()` - Retrieves a value by key
- `localStorage.setItem()` - Saves a key/value pair
- `localStorage.removeItem()` - Removes a key/value pair
- `localStorage.clear()` - Removes all key/value pairs
- `localStorage.key()` - Returns the name of the nth key
- `localStorage.length` - Returns the number of key/value pairs
- `sessionStorage.getItem()` - Retrieves a value by key
- `sessionStorage.setItem()` - Saves a key/value pair
- `sessionStorage.removeItem()` - Removes a key/value pair
- `sessionStorage.clear()` - Removes all key/value pairs
- `sessionStorage.key()` - Returns the name of the nth key
- `sessionStorage.length` - Returns the number of key/value pairs

## IndexedDB API Methods
- `IDBFactory.open()` - Opens a database connection
- `IDBFactory.deleteDatabase()` - Deletes a database
- `IDBTransaction.abort()` - Aborts a transaction
- `IDBTransaction.commit()` - Commits a transaction
- `IDBObjectStore.add()` - Adds a new record
- `IDBObjectStore.clear()` - Clears all records
- `IDBObjectStore.count()` - Returns the count of records
- `IDBObjectStore.createIndex()` - Creates a new index
- `IDBObjectStore.delete()` - Deletes a record
- `IDBObjectStore.deleteIndex()` - Deletes an index
- `IDBObjectStore.get()` - Retrieves a record
- `IDBObjectStore.getAll()` - Retrieves all records
- `IDBObjectStore.getAllKeys()` - Retrieves all record keys
- `IDBObjectStore.getKey()` - Retrieves a record key
- `IDBObjectStore.index()` - Returns an IDBIndex object
- `IDBObjectStore.openCursor()` - Returns a cursor over the store
- `IDBObjectStore.openKeyCursor()` - Returns a cursor over the store keys
- `IDBObjectStore.put()` - Updates or adds a record

## Fetch API Methods
- `fetch()` - Starts the process of fetching a resource
- `Request.prototype.clone()` - Creates a copy of the request
- `Request.prototype.arrayBuffer()` - Returns a promise that resolves with an ArrayBuffer
- `Request.prototype.blob()` - Returns a promise that resolves with a Blob
- `Request.prototype.formData()` - Returns a promise that resolves with FormData
- `Request.prototype.json()` - Returns a promise that resolves with a JSON object
- `Request.prototype.text()` - Returns a promise that resolves with a string
- `Response.prototype.clone()` - Creates a copy of the response
- `Response.prototype.arrayBuffer()` - Returns a promise that resolves with an ArrayBuffer
- `Response.prototype.blob()` - Returns a promise that resolves with a Blob
- `Response.prototype.formData()` - Returns a promise that resolves with FormData
- `Response.prototype.json()` - Returns a promise that resolves with a JSON object
- `Response.prototype.text()` - Returns a promise that resolves with a string
- `Headers.prototype.append()` - Appends a new value to an existing header or adds the header
- `Headers.prototype.delete()` - Deletes a header
- `Headers.prototype.entries()` - Returns an iterator for the headers
- `Headers.prototype.forEach()` - Executes a function for each header
- `Headers.prototype.get()` - Returns a header value
- `Headers.prototype.has()` - Returns a boolean indicating whether a header exists
- `Headers.prototype.keys()` - Returns an iterator for the header names
- `Headers.prototype.set()` - Sets a new value for an existing header or adds the header
- `Headers.prototype.values()` - Returns an iterator for the header values

## Stream API Methods
- `ReadableStream.prototype.cancel()` - Cancels the stream
- `ReadableStream.prototype.getReader()` - Gets a reader for the stream
- `ReadableStream.prototype.pipeThrough()` - Pipes through a transform stream
- `ReadableStream.prototype.pipeTo()` - Pipes to a writable stream
- `ReadableStream.prototype.tee()` - Returns two identical streams
- `WritableStream.prototype.abort()` - Aborts the stream
- `WritableStream.prototype.close()` - Closes the stream
- `WritableStream.prototype.getWriter()` - Gets a writer for the stream
- `TransformStream.prototype.readable` - The readable side of the transform stream
- `TransformStream.prototype.writable` - The writable side of the transform stream

## Web Workers API Methods
- `Worker.prototype.postMessage()` - Sends a message to the worker
- `Worker.prototype.terminate()` - Terminates the worker
- `WorkerGlobalScope.self` - Returns a reference to the WorkerGlobalScope
- `WorkerGlobalScope.importScripts()` - Synchronously imports scripts into the worker
- `WorkerGlobalScope.postMessage()` - Sends a message to the creating script

## Service Workers API Methods
- `ServiceWorkerRegistration.update()` - Attempts to update the service worker
- `ServiceWorkerRegistration.unregister()` - Unregisters the service worker
- `ServiceWorkerRegistration.showNotification()` - Displays a notification
- `ServiceWorkerGlobalScope.skipWaiting()` - Forces waiting service worker to become active
- `Clients.claim()` - Claims clients for active service worker

## Canvas API Methods
- `CanvasRenderingContext2D.arc()` - Creates an arc
- `CanvasRenderingContext2D.arcTo()` - Creates an arc between two tangents
- `CanvasRenderingContext2D.beginPath()` - Begins a path
- `CanvasRenderingContext2D.bezierCurveTo()` - Creates a cubic Bézier curve
- `CanvasRenderingContext2D.clearRect()` - Clears a rectangular area
- `CanvasRenderingContext2D.clip()` - Creates a clipping path
- `CanvasRenderingContext2D.closePath()` - Closes the current path
- `CanvasRenderingContext2D.createImageData()` - Creates a new, blank ImageData object
- `CanvasRenderingContext2D.createLinearGradient()` - Creates a linear gradient
- `CanvasRenderingContext2D.createPattern()` - Creates a pattern
- `CanvasRenderingContext2D.createRadialGradient()` - Creates a radial gradient
- `CanvasRenderingContext2D.drawFocusIfNeeded()` - Draws a focus ring if needed
- `CanvasRenderingContext2D.drawImage()` - Draws an image
- `CanvasRenderingContext2D.ellipse()` - Creates an elliptical arc
- `CanvasRenderingContext2D.fill()` - Fills the current path
- `CanvasRenderingContext2D.fillRect()` - Draws a filled rectangle
- `CanvasRenderingContext2D.fillText()` - Draws filled text
- `CanvasRenderingContext2D.getImageData()` - Returns an ImageData object
- `CanvasRenderingContext2D.getLineDash()` - Returns the current line dash pattern
- `CanvasRenderingContext2D.getTransform()` - Returns the current transformation matrix
- `CanvasRenderingContext2D.isPointInPath()` - Returns whether a point is in the path
- `CanvasRenderingContext2D.isPointInStroke()` - Returns whether a point is in the stroke
- `CanvasRenderingContext2D.lineTo()` - Adds a line segment
- `CanvasRenderingContext2D.measureText()` - Returns text metrics
- `CanvasRenderingContext2D.moveTo()` - Moves the path to the specified point
- `CanvasRenderingContext2D.putImageData()` - Puts image data back onto the canvas
- `CanvasRenderingContext2D.quadraticCurveTo()` - Creates a quadratic Bézier curve
- `CanvasRenderingContext2D.rect()` - Creates a rectangle
- `CanvasRenderingContext2D.resetTransform()` - Resets the current transform to identity matrix
- `CanvasRenderingContext2D.restore()` - Restores the most recently saved canvas state
- `CanvasRenderingContext2D.rotate()` - Rotates the current drawing
- `CanvasRenderingContext2D.save()` - Saves the current canvas state
- `CanvasRenderingContext2D.scale()` - Scales the current drawing
- `CanvasRenderingContext2D.setLineDash()` - Sets the line dash pattern
- `CanvasRenderingContext2D.setTransform()` - Sets the current transformation matrix
- `CanvasRenderingContext2D.stroke()` - Strokes the current path
- `CanvasRenderingContext2D.strokeRect()` - Draws a rectangle (no fill)
- `CanvasRenderingContext2D.strokeText()` - Draws text (no fill)
- `CanvasRenderingContext2D.transform()` - Multiplies the current transformation matrix
- `CanvasRenderingContext2D.translate()` - Moves the canvas origin
- `ImageData.prototype.data` - Uint8ClampedArray containing the color data

## Audio API Methods
- `AudioContext.prototype.createAnalyser()` - Creates an AnalyserNode
- `AudioContext.prototype.createBiquadFilter()` - Creates a BiquadFilterNode
- `AudioContext.prototype.createBuffer()` - Creates an empty AudioBuffer
- `AudioContext.prototype.createBufferSource()` - Creates an AudioBufferSourceNode
- `AudioContext.prototype.createGain()` - Creates a GainNode
- `AudioContext.prototype.createOscillator()` - Creates an OscillatorNode
- `AudioContext.prototype.createPanner()` - Creates a PannerNode
- `AudioContext.prototype.decodeAudioData()` - Decodes audio data
- `AudioNode.prototype.connect()` - Connects two AudioNodes
- `AudioNode.prototype.disconnect()` - Disconnects an AudioNode
- `OscillatorNode.prototype.start()` - Starts an oscillator
- `OscillatorNode.prototype.stop()` - Stops an oscillator

## WebRTC API Methods
- `RTCPeerConnection.prototype.addIceCandidate()` - Adds a new ICE candidate
- `RTCPeerConnection.prototype.addTrack()` - Adds a media track to the connection
- `RTCPeerConnection.prototype.close()` - Closes the connection
- `RTCPeerConnection.prototype.createAnswer()` - Creates an answer to an offer
- `RTCPeerConnection.prototype.createDataChannel()` - Creates a data channel
- `RTCPeerConnection.prototype.createOffer()` - Creates an offer
- `RTCPeerConnection.prototype.getStats()` - Gets statistics
- `RTCPeerConnection.prototype.removeTrack()` - Removes a media track
- `RTCPeerConnection.prototype.setLocalDescription()` - Sets the local description
- `RTCPeerConnection.prototype.setRemoteDescription()` - Sets the remote description
- `RTCDataChannel.prototype.close()` - Closes the data channel
- `RTCDataChannel.prototype.send()` - Sends data

## Internationalization API Methods
- `Intl.Collator.prototype.compare()` - Compares two strings according to locale
- `Intl.DateTimeFormat.prototype.format()` - Formats a date according to locale
- `Intl.DateTimeFormat.prototype.formatRange()` - Formats a date range
- `Intl.DateTimeFormat.prototype.formatRangeToParts()` - Returns formatted date range parts
- `Intl.DateTimeFormat.prototype.formatToParts()` - Returns formatted date parts
- `Intl.DisplayNames.prototype.of()` - Returns localized names
- `Intl.ListFormat.prototype.format()` - Formats a list according to locale
- `Intl.ListFormat.prototype.formatToParts()` - Returns formatted list parts
- `Intl.NumberFormat.prototype.format()` - Formats a number according to locale
- `Intl.NumberFormat.prototype.formatRange()` - Formats a number range
- `Intl.NumberFormat.prototype.formatRangeToParts()` - Returns formatted number range parts
- `Intl.NumberFormat.prototype.formatToParts()` - Returns formatted number parts
- `Intl.PluralRules.prototype.select()` - Returns a plural category
- `Intl.RelativeTimeFormat.prototype.format()` - Formats relative time
- `Intl.RelativeTimeFormat.prototype.formatToParts()` - Returns formatted relative time parts
- `Intl.Segmenter.prototype.segment()` - Returns an iterator over segments

## Temporal API Methods (Proposal)
- `Temporal.Now.instant()` - Returns the current system instant
- `Temporal.Now.plainDateTime()` - Returns the current date and time
- `Temporal.Now.plainDate()` - Returns the current date
- `Temporal.Now.plainTime()` - Returns the current time
- `Temporal.Now.zonedDateTime()` - Returns the current date and time with time zone
- `Temporal.Instant.prototype.add()` - Adds a duration
- `Temporal.Instant.prototype.subtract()` - Subtracts a duration
- `Temporal.Instant.prototype.until()` - Returns the duration until another instant
- `Temporal.Instant.prototype.since()` - Returns the duration since another instant
- `Temporal.PlainDate.prototype.add()` - Adds a duration
- `Temporal.PlainDate.prototype.subtract()` - Subtracts a duration
- `Temporal.PlainDate.prototype.until()` - Returns the duration until another date
- `Temporal.PlainDate.prototype.since()` - Returns the duration since another date
- `Temporal.Duration.prototype.add()` - Adds another duration
- `Temporal.Duration.prototype.subtract()` - Subtracts another duration

## Miscellaneous Methods
- `Event.prototype.preventDefault()` - Cancels the event
- `Event.prototype.stopPropagation()` - Stops event bubbling
- `EventTarget.prototype.addEventListener()` - Registers an event handler
- `EventTarget.prototype.removeEventListener()` - Removes an event handler
- `EventTarget.prototype.dispatchEvent()` - Dispatches an event
- `Navigator.prototype.geolocation.getCurrentPosition()` - Gets the current position
- `Navigator.prototype.geolocation.watchPosition()` - Tracks position
- `Navigator.prototype.geolocation.clearWatch()` - Stops tracking position
- `queueMicrotask()` - Queues a microtask
- `requestAnimationFrame()` - Requests that the browser call a function before the next repaint
- `cancelAnimationFrame()` - Cancels an animation frame request
- `setTimeout()` - Sets a timer which executes a function once the timer expires
- `clearTimeout()` - Cancels a timeout previously established by setTimeout()
- `setInterval()` - Calls a function repeatedly, with a fixed time delay between each call
- `clearInterval()` - Cancels an interval previously established by setInterval()
- `btoa()` - Encodes a string in base-64
- `atob()` - Decodes a base-64 encoded string
- `matchMedia()` - Returns a MediaQueryList object representing the specified media query
- `getComputedStyle()` - Gets the computed style of an element
- `scrollTo()` - Scrolls to a particular set of coordinates
- `scrollBy()` - Scrolls by a given amount
- `scrollIntoView()` - Scrolls an element into view
- `ResizeObserver.prototype.observe()` - Starts observing a target element
- `ResizeObserver.prototype.unobserve()` - Stops observing a target element
- `ResizeObserver.prototype.disconnect()` - Stops observing all target elements
- `IntersectionObserver.prototype.observe()` - Starts observing a target element
- `IntersectionObserver.prototype.unobserve()` - Stops observing a target element
- `IntersectionObserver.prototype.disconnect()` - Stops observing all target elements
- `MutationObserver.prototype.observe()` - Starts observing DOM mutations
- `MutationObserver.prototype.disconnect()` - Stops observing DOM mutations
- `MutationObserver.prototype.takeRecords()` - Returns pending DOM mutation records

This comprehensive list covers the core JavaScript language built-ins as well as the Web APIs that are commonly available in browser environments.