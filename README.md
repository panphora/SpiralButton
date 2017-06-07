# Spiral Button

A button that spirals with colors as it loads. 


## How to add the button to your page

In order to use it on your own page, include the required css and js files:

```html
<link rel="stylesheet" href="css/spiral-button.min.css">
<script src="js/spiral-button.min.js"></script>
```

You can download these files in [this zip archive](https://panphora.github.io/SpiralButton/download/spiral-button.zip).

You can also link to them directly from the [jsDelivr](https://www.jsdelivr.com/) CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spiral-button@1.0.2/dist/spiral-button.min.css">
<script src="https://cdn.jsdelivr.net/npm/spiral-button@1.0.2/dist/spiral-button.min.js"></script>
```

## Initialize the button!

After you've added the source files, all you need to do is call the `SpiralButton` function on any element that you want to transform into a button.

For an element like this:

```html
<button class="spiral-button">Send</button>
```

You could use JavaScript like this:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button")
});
```

It will use the text inside the element you call it on as the button text. Or, you can pass in a string directly using the `buttonText` option:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  buttonText: "Send"
});
```

I'd recommend using button text that's less than 6 words long because longer buttons can make the rotating spiral look too wide.

## Customize your button with a color scheme!

If you want to customize the colors of the rotating spiral, you can pass in a built-in color scheme using the `colorScheme` option:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  colorScheme: "gold"
});
```

Here are all the available built-in color schemes: 

- `gold`
- `pinkAndBlue`
- `fruity`
- `oceanWave`
- `green`
- `rainbow`
- `brightRainbow`
- `red`
- `woodCabin`
- `watermelon`
- `cyan`
- `wildColors`
- `oceanGrass`

A big thank you to the [Open Color](https://yeun.github.io/open-color/) project for providing some excellent base colors for some of color schemes!

### You can also use a color scheme of your own

Just pass in an array of seven colors to make your own color scheme:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  // this is the 'watermelon' color scheme:
  colorScheme: ["#fa6a75","#fb838c","#fc9ba3","#fdb4ba","#3ED071","#67da8f","#90e4ad"]
});
```

If you come up with a color scheme that you really like, send it to me and I'll consider adding it as a built-in color scheme!

## Callbacks

If your code needs to know as soon as the button starts animating, use the `onStart` callback option:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  onStart: function (buttonElement) {
    // just starting to animate!
  }
});
```

And, if you want to know exactly when the animation ends, use the `onComplete` callback option:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  onComplete: function (buttonElement) {
    // the animation has just completed!
  }
});
```

## Custom duration

You can modify the duration of the animation by passing in a number of **milliseconds** for it to run in:

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  duration: 2000 // 2 seconds
});
```

You can also use a string like "`2s`" or "`1200ms`" for this option.


## Custom rotation (limited)

You can specify a few custom rotations for the rotating spiral. As of the current version, you're limited to the following options:

- `0`
- `90`
- `180`
- `270`
- `360`

```javascript
SpiralButton({
  buttonElement: document.querySelector(".spiral-button"),
  rotation: 180
});
```

The spiral will always rotate counter-clockwise. This can't be overrided unless you manually override the css.


## Manually overriding the animation's CSS

By default, the background spiral animation happens on an svg element that has the class "`spiral-bg`" on it. You can override this animation by specifying your own, if you want. 

As a starting template for this animation, you can use the default animation css that Spiral Button uses:

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
  animation: growAndRotateSpiral 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
```

This will give you complete control over the animation, including the duration, the rotation, and the easing function.

Make sure you use an [autoprefix tool](https://autoprefixer.github.io/) to generate all of the vendor prefixes for your animation and keyframe css.


## Contibutions!

If you like this button, please consider contributing by adding ideas and code of your own. 

Some of the things on my todo list are the following features:

- Dynamically generated and inserted stylesheets 
  - This will help add *any* custom rotation 
  - This will help add *any* easing function
- A smoother spiral image. 
  - The current spiral was traced by hand in Illustrator, so it's not a perfect spiral. You can tell if you zoom into the SVG a lot. I'd love to have a perfect spiral, as an SVG image.
- Fixing small visual glitches
  - Sometimes the rotating spiral animation covers up the button's right edge by an extra pixel, making the right edge of the button appear 1px wide instead of 2px wide

Any help you can offer would be greatly appreciated!

