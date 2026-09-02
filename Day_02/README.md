Here's a quick summary of Day 2:

**Primitive vs Non-Primitive Data Types**
- **Primitive** (immutable): `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`
- **Non-Primitive** (mutable): `Object`, `Array`
- Primitives are compared by **value**; non-primitives are compared by **reference** (two arrays with same items are NOT equal unless they point to the same object)

**Numbers**
- Integers and floats; use `const` for fixed values (e.g. `PI`, `gravity`)
- **Math Object** methods: `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.min()`, `Math.max()`, `Math.abs()`, `Math.sqrt()`, `Math.pow()`, `Math.random()`
- Random number in range: `Math.floor(Math.random() * 11)` → 0 to 10

**Strings**
- Use single, double, or backtick quotes
- Concatenation: `+` operator (old way) or template literals (preferred): `` `Hello ${name}` ``
- Escape sequences: `\n` newline, `\t` tab, `\\` backslash, `\'` `\"` quotes
- Long strings: use `\` at end of line to continue on the next line

**Key String Methods**
- `length`, `toUpperCase()`, `toLowerCase()`
- `substr(start, length)`, `substring(start, end)`
- `split()`, `trim()`, `includes()`, `replace()`
- `charAt()`, `charCodeAt()`, `indexOf()`, `lastIndexOf()`
- `startsWith()`, `endsWith()`, `search()`, `match()`, `concat()`, `repeat()`

**Type Checking & Casting**
- Check type: `typeof variable`
- String → Int: `parseInt()`, `Number()`, or `+num`
- String → Float: `parseFloat()`, `Number()`, or `+num`
- Float → Int: `parseInt()`
- Note: `typeof null` returns `"object"` (a known JS quirk)