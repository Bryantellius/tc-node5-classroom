# Review 11/17/21: React Component Lifecycle

## Stages

1. Creation (`constructor()`)
2. Render (`render()`)
3. Mount (`componentDidMount()`)
   - API requests
   - setIntervals/Timeouts
   - Event listeners

---

- (State is updated `this.setState()`)

4. Re-render (`render()`)
5. Update (`componentDidUpdate()`)
   - Any logic specific to your program that is needed after state changes

---

6. Unmount (`componentWillUnmount()`)
   - Cancelling pending API requests to prevent memory leakage
   - Removing event listeners
   - Clearing intervals/timeouts

## `this` binding in JS

### Implicit Binding

- `this` is bound upon containing execution scope (usually objects for methods)

### Lexical Binding

- `this` is bound upon definition of an arrow notation function
