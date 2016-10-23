// Send a color to an LED.

SPI2.setup({baud:1000000, mosi:B15, sck:B13}); 
SPI2.send([0,0,0]);

var rgb = new Uint8Array(3);

setInterval(function() {
  rgb[0] = (rgb[0] + 10) % 255;
  rgb[1] = (rgb[1] + 10) % 255;
  rgb[2] = (rgb[2] + 10) % 255;
  SPI2.send(rgb);
}, 15);

save();