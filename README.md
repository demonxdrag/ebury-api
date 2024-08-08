## Welcome to the Node.js Test for Adrian Pappalardo

This API runs in conjunction with a UI made in React Native that is in a different repository that is bundled with this delivery.

## Architecture

This project runs on __Node.js__ using __Express.js__ to handle the API calls.

Additionally it uses __NPM__ as a package manager

## Configuration

This project doesn't require any configuration to run however there is a parameter that can be changed which is the __PORT__, for this you can create an `.env` file in the root of the project containing the following:

```
PORT={YOUR_PORT} # Defaults to 3000
```

Where __{YOUR_PORT}__ is the new port you would want to run the server at

## Run the server

You can run the server by executing the following command:

```
npm run dev
```

Once the server has started, there will be two comments in the terminal showing __localhost__ and the __local ip address__ with the port attached to it.

This are __needed__ for correctly configuring the __UI__

## Test the project

To test the project you can run:

```
npm test
```

__Note__ that the _3 seconds_ waiting period for requests is __disabled__ for tests just to make them faster in this environment
