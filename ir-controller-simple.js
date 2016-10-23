// Use an IR receiver to print some logs.

setWatch(function(v) {
  console.log("A: " + v.state);
}, A5, {repeat: true});

setWatch(function(v) {
  console.log("B: " + v.state);
}, A6, {repeat: true});

setWatch(function(v) {
  console.log("C: " + v.state);
}, A7, {repeat: true});

setWatch(function(v) {
  console.log("D: " + v.state);
}, B1, {repeat: true});

save();