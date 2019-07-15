# FreeCodeCamp: Use The Twitch.tv JSON API

This project involves compiling and displaying a list of Twitch.tv users and their current status by pulling info from the Twitch API.

Data is sourced from [Twitch.tv][twitch].

Content is loaded dynamically loaded using jQuery.

Styling is provided by Bootstrap.

The search icon is provided by FontAwesome.

Input debouncing is provided by the jquery-throttle-debounce plugin.

To respect API limits, update polling is limited to every 30 seconds.

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

[spec]: https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api
[codepen]: https://codepen.io/evanplaice/full/YYxERJ/
[twitch]: https://www.twitch.tv/
