# M4 control logic excerpt

```text
const IDLE = 0;
const SLEEPING = 1;

let state = IDLE;

loop:
  update clock with Time.hour() and Time.minute()
  read photoresistor from A0

  if phone is docked:
    state = SLEEPING
    Particle.publish("sleep_mode", "on")
    dim NeoPixels gradually
  else:
    state = IDLE
    keep the dock warm and visible
```

This excerpt is based on the M4 prototype plan and captures the control logic that guided the functional prototype.
