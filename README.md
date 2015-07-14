# API Test

Testing Trello API. This creates a local server for testing against. The board endpoints have been tested against the production Trello API, though the check list endpoints have not been so far.

## Usage

1. [Install Dredd](http://dredd.readthedocs.org/en/latest/quickstart/)
1. Run Dredd with `dredd` command

## Running Server

To run the local server, use:

```js
node server.js
```

This loads a server at http://127.0.0.1:3000 that returns data found in [data.js](./data.js).
