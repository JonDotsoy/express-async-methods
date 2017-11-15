# Express Async Methods

Allow async functions on Express.IO. Only write the word `Async` after of your methods.

**Methods allowed**

- `getAsync`
- `postAsync`
- `headAsync`
- `deleteAsync`
- `putAsync`
- `useAsync`


## How to use

```javascript
import '@jondotsoy/express-async-methods'
import express from 'express'

const app = express()

app.getAsync(async (req, res) => {
  throw new Error('Fail 🍫!!!')
})
```

## Why use it

### Whitout `@jondotsoy/express-async-methods`

```javascript
app.get(async (req, res, next) => {
  try {  
    throw new Error('Fail 🍫!!!')
  } catch (ex) {
    next(ex)
  }
})
```

### Whit `@jondotsoy/express-async-methods`

```javascript
app.getAsync(async (req, res) => {
  throw new Error('Fail 🍫!!!')
})
```
