# FreeCodeCamp: Build A Pomodoro Clock

This project involves building an interactive pomodoro clock. It should be possible to configure the work/rest break durations, start/stop the clock, and have a nice looking interface.

Databinding is provided by Angular.js

Styling is provided by Bootstrap.

Instead of my typical state class, I opted to do things the 'Angular way' and used a service to manage state. I broke up the UI pieces into 3 separate controllers in an attempt to reduce the typical spaghetti-inducing nature of Angular.js code.

The design mimics the example very closely, except I fixed a few UI bugs and improved usability a bit.

I may actually extend this to work as an Electron app so I can use it. Linux is sorely lacking a good Pomodoro timer app.

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

[spec]: https://www.freecodecamp.org/challenges/build-a-pomodoro-clock
[codepen]: https://codepen.io/evanplaice/full/qpvBgd/
