# High-level architecture diagram

```text
Student phone
   |
   v
PausePad dock sensor
   |
   v
Particle Photon state machine
   |--> Ambient light escalation
   |--> Optional audio cue
   |--> Bedtime session timing
   |
   v
Mobile app
   |
   v
Settings, schedule, and usage reflection
```

The system works as a loop:

- The user places the phone into the dock.
- The sensor detects the placement event.
- The Photon moves the system from `IDLE` to `SLEEPING`.
- Light and audio cues respond gently.
- The app stores settings and session history.
