# Review 12/06/21: Node

## What is Node?

> Node is an _asynchronous_, _event driven_ runtime environment for running JavaScript

- Server-side JavaScript
- Creating a web server with JS

## Modules

- Originally **CommonJS**, `require(module)`
  - As of Node -v 14.4.0, you can use ESM, (_ECMAScript Modules_)
- Core (Built-in)
- Local
- Third Party (NPM)

## Node HTTP

- Allows us to create an instance of an HTTPServer that can respond to requests send to a host, served on a specified port

```js
createServer((req, res) => {
  // respond to request
}).listen(8080, () => console.log("Server running..."));
```

## Node FS

- Allows us to use JS to access and manipulate local files/directories
- Creating, reading, updating, deleting, moving, copying, etc

## Node Events

- Allows us to create and respond to events within our asynchronous node environment
- `emit()`
- `on()`, or `addListener()`
- `off()`, or `removeListener()`
- `once()`

```js
let newsletter = new EventEmitter();

newsletter.on("unsubscribe", handleUnsubscribe);

// somewhere else

newsletter.emit("unsubscribe", contact);
```
