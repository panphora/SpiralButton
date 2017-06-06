# Spiral Button

A button that spirals with colors as it loads. 


## How to add it to your page

In order to use it on your own page, first include the required [css and js files](https://panphora.github.io/SpiralButton/download/spiral-button.zip):

```html
<link rel="stylesheet" href="css/spiral-button.min.css">
<script src="js/spiral-button.min.js"></script>
```

You can also get them from the [jsDelivr](https://www.jsdelivr.com/) CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spiral-button@1.0.0/dist/spiral-button.min.css">
<script src="https://cdn.jsdelivr.net/npm/spiral-button@1.0.0/dist/spiral-button.min.js"></script>
```

## Initialize the button!

After you've added the source files, all you need to do is call the `SpiralButton` method on any button element or anchor tag that you want to transform.

```html
<button>Send</button>
```

```javascript
SpiralButton({
  buttonElement: document.querySelector("button")
});
```

It will use the text inside the original button as the text for the Spiral Button (or you can pass in your own text using the `buttonText` option). Try to make this text less than 6 words long.

## Customize it with a color scheme

If you want to customize the colors of the inner spiral, you can pass in a known color scheme to the `colorScheme` option:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  colorScheme: "gold"
});
```

Here are all the available built-in color schemes: `gold`, `pinkAndBlue`, `fruity`, `oceanWave`, `green`, `rainbow`, `brightRainbow`, `red`, `woodCabin`, `watermelon`, `cyan`, `wildColors`, `oceanGrass`.

A big thank you to the [Open Color](https://yeun.github.io/open-color/) project for providing some excellent base colors for a few of these color schemes!

### Use a color scheme of your own

You can also create your own color scheme by passing in an array of seven colors:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  // this is the 'watermelon' color scheme:
  colorScheme: ["#fa6a75","#fb838c","#fc9ba3","#fdb4ba","#3ED071","#67da8f","#90e4ad"]
});
```

If you come up with a great one, let me know, and I'll add it to the main plugin!

## Callbacks

If you need to know when the button starts animating, just use the `onStart` callback option:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  onStart: function (buttonElement) {
    // just starting to animate!
  }
});
```

And, if you want to know when the animation ends, use the `onComplete` callback option:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  onComplete: function (buttonElement) {
    // the animation has just completed!
  }
});
```

## Custom duration

You can modify the duration of the animation by passing in a number of **milliseconds**:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  duration: 2000 // 2 seconds
});
```

You can also use a string like `2s` or `1200ms` for this option.


## Custom rotation (limited)

You can specify a few custom rotations for the spiral. For right now, you have to choose from the following options:

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

The spiral will always rotate counter-clockwise. This can't be overrided unless you manually override the css.


## Manually override the animation

By default, the background spiral animation happens on an svg element with the class `spiral-bg`. You can override this animation by specifying your own. As a template, you can use the default animation that Spiral Button uses:

```css
@keyframes growAndRotateSpiral {
  from {
    transform: scale(.01) rotate(0deg);
  }
  to {
    transform: scale(1) rotate(-90deg);
  }
}
```

Then attach it to the element like so:

```css
.spiral-button.pressed .spiral-bg {
  -webkit-animation: growAndRotateSpiral 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
          animation: growAndRotateSpiral 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
```

This will give you complete control over the animation, including the duration, the rotation, and the easing function.


## Known issues

- Only supports modern browsers that have support for
  - `Element.classList`
  - CSS3 Animations
  - the `animationend` callback

Despite these issues, it works in IE11 because, while an SVG element is being animated, the underlying SVG paths are not. I'm not sure about other version of IE.


## Request for help

If you like this project, you can contribute by helping me add one of the following features:

- Dynamically generated and inserted stylesheets 
  - This will help us add any custom rotation 
  - This will also let us customize the animation's easing function
- A curvier spiral svg (the current svg was traced in Illustrator and isn't a perfect spiral)
- Help fix the bug in Safari where the spiral shows up sometimes and sometimes it doesn't

Your help is greatly appreciated!

---

You can also help by going to [Artisfy](https://artisfy.com/) and trying out the service for your own projects! 

Thank you!

