Here's a quick summary of Day 5:

**What is an Array?**
- Ordered, mutable collection that can hold mixed data types including duplicates and even other arrays
- Created with `[]` (preferred) or `Array()`; use `const` by convention

**Creating Arrays**
- With values directly: `const fruits = ['banana', 'orange']`
- From a string: `'Hello'.split('')` → `['H','e','l','l','o']`

**Accessing & Modifying**
- Access by index starting at `0`; last item = `arr[arr.length - 1]`
- Modify directly by index: `arr[0] = 'newValue'`

**Key Array Methods**
- `length` — size of array
- `fill(value)` — fills all slots with a static value
- `concat()` — joins two arrays into a new one
- `indexOf()` — finds index of item (-1 if not found)
- `lastIndexOf()` — finds last occurrence index
- `includes()` — returns `true`/`false` if item exists
- `Array.isArray()` — checks if something is an array
- `toString()` — converts array to comma-separated string
- `join(separator)` — joins items into a string with a custom separator
- `slice(start, end)` — cuts out a portion (non-destructive)
- `splice(start, deleteCount, ...items)` — removes/replaces items (destructive)
- `push()` — adds to end; `pop()` — removes from end
- `unshift()` — adds to beginning; `shift()` — removes from beginning
- `reverse()` — reverses in place
- `sort()` — sorts alphabetically/ascending in place

**Array of Arrays**
- Arrays can contain other arrays: `const fullStack = [frontEnd, backEnd]`
- Access nested items: `fullStack[0]` → first array