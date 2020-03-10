# FreeCodeCamp: Show The Local Weather

This project involves building a weather reporting page sourcing data from an external API.

There is some freedom for creativity involved, so I opted to show today's report as well as a 5 day forecast.

Weather info is sourced from [WeatherUnderground.com][weatherunderground].

Content is loaded dynamically loaded using jQuery.

Style is provided by Bootstrap.

In additon, there is an option to toggle between imperial and metric units. I chose to expose this option as a query parameter so the setting can be set via an external link.

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

[spec]: https://www.freecodecamp.org/challenges/show-the-local-weather
[codepen]: https://codepen.io/evanplaice/full/ZvyNEV/
[weatherunderground]: https://www.wunderground.com/
