# js-canvas-engine


## Structural methods
Optional, may be defined in user code and will be triggered at different points

### function keyPressed(k) { }
- Fired initially then sustained as a key is held. k contains the keycode of the key pressed and can be compared against the key object.

### function init() { }
- Run once when the page loads

### function main() { }
- Run continually as the page runs

## Reference objects:

### mouse
- x
- y
- left
- mid
- right
### key
- 

| Library function | Usage |
| --- | --- |
| background(r, g, b) | Fills the canvas with a solid color |
| lstyle(r, g, b) | "line style" Sets the color of lines drawn, used by `lrect` and `brect` |
| fstyle(r, g, b) | "fill style" Sets the color of solid fill colors, used by `frect` and `brect` |
| lrect(x, y, w, h) | "line rectangle" Draws the edges of a rectangle with no fill with a color set by `lstyle` |
| frect(x, y, w, h) | "filled rectangle" Draws a rectangle with a solid color set by `fstyle` |
| brect(x, y, w, h) | "bordered rectangle" Draws a rectangle with a solid color set by `fstyle` and a border drawn with a color set by `lstyle`|
