CORS
=====

## Overview

Cross-Origin calls poses a security risk for the users. 
A malicious website can attempt to steal the user data by initiating a call
from the user browser.

    Client --> Server

The protection is a client enforcement that happens only in the browser. It does not impact Desktop clients (eg, Postman) or Mobile apps.

* Access-Control-Allow-Origin

The simple case is GET or HEAD with no Header. It only requires to validate the Origin.

## Pre-flight

If GET or HEAD method contains additional Headers in the call, then it requires 
to request a pre-authorization. It is an OPTION request (also called pre-flight)
using Access-Control-Request-Headers.

*  Access-Control-Allow-Headers

If the request method is POST, PUT, PATCH, ... then it is required to check the method.

* Access-Control-Allow-Methods

## Responses

In all responses, you should see the following results:

* Access-Control-*

It will declare the following items:

* Origin
* Headers
* Methods

# Examples

## No CORS (default Server implementation)
```
curl -i -X GET https://anypoint.mulesoft.com/mocking/api/v1/links/0ff5ac86-bcc8-466b-b18d-31aef2b6fd56/data/nocors
```

Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 49
```

## Allow simple GET/HEAD calls without additional headers

```
curl -i -X GET https://anypoint.mulesoft.com/mocking/api/v1/links/0ff5ac86-bcc8-466b-b18d-31aef2b6fd56/data/get-cors
```

Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 49
Access-Control-Allow-Origin: *
```


## Preflight calls for ALL methods and headers

```
curl -i -H "Authorization: Bearer ABC" -X OPTIONS https://anypoint.mulesoft.com/mocking/api/v1/links/0ff5ac86-bcc8-466b-b18d-31aef2b6fd56/data/all-cors
```

```
curl -i --data "{}" -H "Authorization: Bearer ABC" -X POST https://anypoint.mulesoft.com/mocking/api/v1/links/0ff5ac86-bcc8-466b-b18d-31aef2b6fd56/data/all-cors
```

Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 49
Access-Control-Allow-Origin: *
```


# References

https://fetch.spec.whatwg.org/#http-access-control-allow-credentials

# Example

```javascript
fetch("https://victim.example/naïve-endpoint", {
  method: "POST",
  headers: [
    ["Content-Type", "application/json"],
    ["Content-Type", "text/plain"]
  ],
  credentials: "include",
  body: JSON.stringify(exerciseForTheReader)
});
```