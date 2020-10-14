# Typescript boilerplate w/ local server

This adds a local server to [typescript-boilerplate](https://github.com/jsoverson/typescript-boilerplate) for projects that need to test against real HTTP transactions.

## Who is this for?

Anyone who uses TypeScript and wants more reliable network-dependent tests.

## Additional Features

Along with everything from [typescript-boilerplate](https://github.com/jsoverson/typescript-boilerplate#features), this includes.

- Local HTTP test server preconfigured in tests.
- Adds **projectroot as an alternative to **dirname to avoid lookup problems from compiled files.
- Includes an async `readProjectFile()` function to read files relative to the `__projectroot`

## Additional Information

See [https://github.com/jsoverson/typescript-boilerplate](typescript-boilerplate) for more details.
