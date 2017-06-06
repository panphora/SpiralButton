# Spiral Button

A button that spirals with colors as it loads. 


## Add files to your page

In order to use it on your page, include the files from the `dist` folder on your page:

```html
<link rel="stylesheet" href="css/spiral-button.min.css">
<script src="dist/spiral-button.min.js"></script>
```

You can also get them from the jsdelivr.net cdn:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spiral-button@1.0.0/dist/spiral-button.min.css">
<script src="https://cdn.jsdelivr.net/npm/spiral-button@1.0.0/dist/spiral-button.min.js"></script>
```

## Initialize it!

Then, you just need to call it on the `button` elements or `a` tags you want it to transform into Spiral Buttons! 

```html
<button>Send</button>
```

```javascript
SpiralButton({
  buttonElement: document.querySelector("button")
});
```

## Add a color scheme!

If you want to customize the colors, you can pass in a known color scheme:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  colorScheme: "gold"
});
```

Play around and try and of the following: `gold`,`pinkAndBlue`,`fruity`,`oceanWave`,`green`,`rainbow`,`brightRainbow`,`red`,`woodCabin`,`watermelon`,`cyan`,`wildColors`,`oceanGrass`

#### Custom color scheme

You can also make up your own color scheme and pass it in as an array of seven colors:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  colorScheme: ["#fa6a75","#fb838c","#fc9ba3","#fdb4ba","#3ED071","#67da8f","#90e4ad"]
});
```

## Callbacks

You can also tell when the button is just starting to animate or when the animation has ended:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  onStart: function (buttonElement) {
    // just starting to animate!
  }
});
```

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  onComplete: function (buttonElement) {
    // the animation has just completed!
  }
});
```

## Custom duration

You can specify the duration of the animation by passing in a number that represents the number of milliseconds you want it to run:

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  duration: 2000
});
```


## Custom rotation

You can specify a few custom rotations, but it has to be one of the following: `0`, `90`, `180`, `270`, `360`.

```javascript
SpiralButton({
  buttonElement: document.querySelector("button"),
  rotation: 180
});
```

And they all rotate counter-clockwise by default and can't be overrided unless you manually override the css.


## Request for help

If you like this project, you can contribute by adding one of the following:

- Dynamically generated and inserted stylesheets so more custom rotations and easing functions can be supported 
- A curvier spiral (I traced the current svg in Illustrator, so it has some bumps)
- Help fix the bug in Safari where the spiral shows up sometimes and sometimes it doesn't


Your help is greatly appreciated!

