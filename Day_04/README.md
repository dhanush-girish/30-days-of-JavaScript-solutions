Here's a quick summary of Day 4:

**What are Conditionals?**
- Control flow based on conditions — JS executes top to bottom by default; conditionals change that

**if**
- Runs a block only if the condition is `true`
- If condition is `false`, nothing happens

**if…else**
- Runs the `if` block if `true`, otherwise runs the `else` block

**if…else if…else**
- For multiple conditions — checks each one in order, runs the first matching block
- `else` is the fallback if none match

**switch**
- A cleaner alternative to long `if…else if` chains
- Matches a value against `case` blocks; `break` stops execution after a match
- `default` runs if no case matches
- Can also use expressions in cases: `switch(true) { case num > 0: ... }`

**Ternary Operator**
- One-liner shorthand for `if…else`:
  `condition ? doIfTrue : doIfFalse`