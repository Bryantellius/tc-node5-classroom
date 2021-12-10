# Review 12/03/21: Node HTTP Module

## Node Recap

- Initialize (run) a JS file within Node, execute `node <filepath>` in a terminal (shell)

## Built In Modules

To list a few

1. http
2. https
3. querystring
4. path
5. fs
6. events
7. streams
   ...

## HTTP

- `createServer()`, returns an instance of an HTTPServer
  - takes a callback function (**request handler**) with two parameters, _request_ and _response_ objects

### Request

- `url`, returns a string of the url path endpoint
- `method`, returns a string (_all caps_) with the request http method

### Response

- `writeHead()`, writes (sends) the headers for the response to the client **ahead of the response body**
- `setHeader()`, individually sets header property/value pairs
- `getHeader()`, returns a single header value
- `getHeaders()`, returns all header values
- `removeHeader()`, removes a header value
- `write()`, writes (sends) data to the client
- `end()`, sends an end event to the client, signalling the end of the request/response cycle
