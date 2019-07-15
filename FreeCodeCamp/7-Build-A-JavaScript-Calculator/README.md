# FreeCodeCamp: Build A JavaScript Calculator

This project involves building an interactive calculator.

Content is injected into the DOM via jQuery.

Styling is provided by Bootstrap.

State is handled via a Calculator instance. External calls to jQuery are dependency injected so they can be mocked for testing.

Calculations are made by parsing the inputs to tokens, and reducing those to a final value.

## Links 

- [Spec][spec]
- [CodePen][codepen]

## Notes

Compile the SASS to CSS with

```bash
npx node-sass index.sass index.css
```

Preview using Live-Server

```bash
npx live-server .
```

[spec]: https://www.freecodecamp.org/challenges/build-a-javascript-calculator
[codepen]: https://codepen.io/evanplaice/full/rpPGPK/
