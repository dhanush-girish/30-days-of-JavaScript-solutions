Here's a quick summary of Day 3:

**Booleans**
- Only two values: `true` or `false`
- **Truthy**: any non-zero number, any non-empty string, `true`
- **Falsy**: `0`, `0n`, `null`, `undefined`, `NaN`, `false`, empty string `''`

**Undefined & Null**
- `undefined` — variable declared but no value assigned
- `null` — intentionally empty value

**Operators**
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
- **Assignment shorthand**: `+=`, `-=`, `*=` etc.
- **Comparison**: `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
  - `==` checks value only; `===` checks value AND type (safer, always prefer this)
  - `NaN === NaN` is `false` (JS quirk)
- **Logical**: `&&` (AND), `||` (OR), `!` (NOT)
- **Increment/Decrement**: `++count` (pre) vs `count++` (post) — post-increment is more common
- **Ternary**: `condition ? doIfTrue : doIfFalse`

**Window Methods (Browser)**
- `alert('msg')` — shows a popup message
- `prompt('msg')` — takes input from user, returns a string
- `confirm('msg')` — OK returns `true`, Cancel returns `false`

**Date Object**
- `const now = new Date()` — creates current date/time object
- Key methods: `getFullYear()`, `getMonth()` *(0–11, add 1!)*, `getDate()` *(1–31)*, `getDay()` *(0=Sunday, 6=Saturday)*
- `getHours()`, `getMinutes()`, `getSeconds()`
- `getTime()` or `Date.now()` — milliseconds since Jan 1, 1970 (Unix time)