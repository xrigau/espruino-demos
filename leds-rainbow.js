// Continuous rainbow effect with an LED.

var rgb = new Uint8Array([100, 100, 100]);

SPI2.setup({baud:1000000, mosi:B15, sck:B13}); 
SPI2.send(rgb);

function hue2Rgb(hue) {
  var convert = function convert(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  var l = 0.5;
  var s = 0.8;

  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  rgb[0] = convert(p, q, hue + 1/3) * 255;
  rgb[1] = convert(p, q, hue) * 255;
  rgb[2] = convert(p, q, hue - 1/3) * 255;
}

var hue = 0.0;
var increment = 0.002;

setInterval(function() {
  hue2Rgb(hue);
  SPI2.send(rgb);
  hue = (hue + increment);

  if (hue >= 1.0 || hue <= 0.0) {
    hue = Math.max(0.0, Math.min(hue, 1.0));
    increment = -increment;
  }
}, 15);

save();