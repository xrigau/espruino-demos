// Use an IR receiver (with its controller) to control the LEDs.

SPI2.setup({baud:1000000, mosi:B15, sck:B13}); 
var red = 0;
var green = 0;
var blue = 0;

function updateLeds() {
  SPI2.send([red, blue, green]);
}

setWatch(function(v) {
  red = 0;
  if (v.state) {
    red = 254;
  }
  updateLeds();
}, A5, {repeat: true});


setWatch(function(v) {
  green = 0;
  if (v.state) {
    green = 254;
  }
  updateLeds();
}, A6, {repeat: true});

setWatch(function(v) {
  blue = 0;
  if (v.state) {
    blue = 254;
  }
  updateLeds();
}, A7, {repeat: true});

setWatch(function(v) {
  var c = 0;
  if (v.state) {
    c = 254;
  }
  red = c;
  green = c;
  blue = c;
  updateLeds();
}, B1, {repeat: true});

save();