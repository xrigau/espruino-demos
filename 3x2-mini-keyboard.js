var kb = require("USBKeyboard");

const PINS_OUT = [B13, B14, B15];
const PINS_IN = [A6, A5];
const CHARS = [[kb.KEY.E, kb.KEY.Z, kb.KEY.P], [kb.KEY.Z, kb.KEY[";"], kb.KEY.D]];

function initialise() {
  for (let o in PINS_OUT) {
    pinMode(PINS_OUT[o], "output", false);
  }
  for (let i in PINS_IN) {
    pinMode(PINS_IN[i], "input_pulldown", false);
  }
  digitalWrite(PINS_OUT, 0);
}

function read() {
  for (let o in PINS_OUT) {
    digitalWrite(PINS_OUT[o], 1);
    for (let i in PINS_IN) {
      if (digitalRead(PINS_IN[i])) {
        kb.tap(CHARS[i][o], function() {});
      }
    }
    digitalWrite(PINS_OUT[o], 0);
  }
}

kb.setModifiers(kb.MODIFY.SHIFT, function() {
  initialise();
});
setInterval(read, 50);
save();
