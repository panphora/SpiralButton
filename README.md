# Spiral Button

A button that spirals with colors as it loads. 


## Add files to your page

In order to use it on your page, include the [minfied files](https://github.com/panphora/SpiralButton/tree/master/dist) on your page:

```html
<link rel="stylesheet" href="css/spiral-button.min.css">
<script src="js/spiral-button.min.js"></script>
```

You can also get them from the [jsDelivr](https://www.jsdelivr.com/) CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spiral-button@1.0.0/dist/spiral-button.min.css">
<script src="https://cdn.jsdelivr.net/npm/spiral-button@1.0.0/dist/spiral-button.min.js"></script>
```

## Initialize it!

Call the `SpiralButton` method on any button elements or anchor tags you want to transform.

```html
<button>Send</button>
```

```javascript
SpiralButton({
  buttonElement: document.querySelector("button")
});
```

## Customize it with a color scheme

If you want to customize the colors, you can pass in a known color scheme:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  colorScheme: "gold"
});
```

Play around and try and of the following: `gold`, `pinkAndBlue`, `fruity`, `oceanWave`, `green`, `rainbow`, `brightRainbow`, `red`, `woodCabin`, `watermelon`, `cyan`, `wildColors`, `oceanGrass`.

A big thank you to the [Open Color](https://yeun.github.io/open-color/) project for providing some excellent base colors for some of these schemes.

### Add your own color scheme

You can also make up your own color scheme and pass it in as an array of seven colors:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  // the following is the 'watermelon' color scheme
  colorScheme: ["#fa6a75","#fb838c","#fc9ba3","#fdb4ba","#3ED071","#67da8f","#90e4ad"]
});
```

## Callbacks

Do you need to know when the button has just started animating? Use the `onStart` callback.

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  onStart: function (buttonElement) {
    // just starting to animate!
  }
});
```

And use the `onComplete` callback when you want to know when the spiral animation has run its course.

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  onComplete: function (buttonElement) {
    // the animation has just completed!
  }
});
```

## Custom duration

You can specify the duration of the animation in **milliseconds** by passing in a number:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  duration: 2000 // 2 seconds
});
```


## Custom rotation

You can specify a custom rotation for the spiral, but you have to choose from the following options: 

- `0`
- `90`
- `180`
- `270`
- `360`

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  rotation: 180
});
```

The spiral will always rotate counter-clockwise. This can't be overrided unless you manually override the css (which shouldn't be that hard).


## Known issues

- Safari bug
- SVG legs don't move in IE
- Browser needs to support
  - classlist
  - animations
  - onanimationend callback


## Request for help

If you like this project, you can contribute by helping me add one of the following:

- Dynamically generated and inserted stylesheets 
  - This will help us add any custom rotation 
  - This will also let us customize the animation's easing function
- A curvier spiral svg (the current svg was traced in Illustrator and isn't a perfect spiral)
- Help fix the bug in Safari where the spiral shows up sometimes and sometimes it doesn't


Your help is greatly appreciated!

