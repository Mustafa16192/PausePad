# Anti-Doom Scroll Smart Nightstand
## SI 612 Project Prototype Plan

### Concept
A 2-stage smart nightstand designed to stop nighttime doom scrolling. When the user places their phone into the designated slot, the nightstand detects it, slowly dims its ambient lights, starts playing quiet sleep music, and displays the time on a digital clock.

### Phase 1: Component Selection
Based on the SI 612 Maker Lab kits:
1. **Microcontroller**: Particle Photon (Wi-Fi connected for time syncing).
2. **Phone Detection Sensor**: Photoresistor (Light Sensor) placed at the bottom of the slot. When the phone is inserted, it blocks the light, triggering the system.
3. **Lighting**: Adafruit NeoPixel Strip or Ring for smooth, gradual dimming.
4. **Display**: TFT LCD Screen or OLED display for the digital clock.
5. **Audio**: 
   - *Hardware route*: Piezo buzzer or MP3 module (like DFPlayer Mini).
   - *Wizard of Oz (WOz) route*: Particle Photon triggers an event (`Particle.publish()`) that tells a laptop to play a Spotify sleep playlist.

### Phase 2: Physical Design (2-Stage Box)
- **Top Stage (The Slot)**: A vertical or angled slot for the smartphone. The photoresistor sits at the very bottom.
- **Bottom/Back Stage (The Brains)**: A hidden compartment housing the Particle Photon, breadboard, and wiring.
- **The Exterior**: Mount the LCD screen on the front face. Run the NeoPixels around the base or behind a frosted/translucent plastic lip for a diffused glow.

### Phase 3: The Circuit & Wiring
- **Photoresistor**: Connect one leg to power (3V3) and the other to an analog pin (e.g., `A0`), with a pull-down resistor to Ground (GND).
- **NeoPixels**: Connect Power (VIN/VUSB), Ground (GND), and Data to a digital PWM pin (e.g., `D2`).
- **LCD Screen**: Wire via SPI or I2C depending on the screen (pins like `A3`, `A4`, `A5`, `D4`, `D5`).
- **Power**: Power the Photon via USB to handle the NeoPixels and LCD power draw.

### Phase 4: Code Logic (State Machine)
The code will operate in two primary states: **IDLE** (phone is out) and **SLEEPING** (phone is in).

1. **The Clock (Always On)**:
   - Use the Photon's Wi-Fi time syncing: `Time.hour()`, `Time.minute()`.
   - Continually update the LCD screen.
2. **Sensor Logic**:
   - Continually read the photoresistor: `analogRead(A0)`.
   - *High light level* -> State = IDLE.
   - *Low light level* -> State = SLEEPING.
3. **Light Logic**:
   - **IDLE**: NeoPixels are on (warm orange/yellow).
   - **SLEEPING**: Trigger a loop that gradually reduces NeoPixel brightness from 255 to 0 over 5–10 minutes.
4. **Music Logic**:
   - Upon state switch from IDLE to SLEEPING, send a command/signal to start the music.

### Phase 5: High-Fidelity 3D Printing (M4 Prototype)
Leveraging the Bambu X1C/H2D printers:
1. **CAD Design**: Design the two-stage box in Fusion 360 or TinkerCAD. Include wire routing holes, an LCD cutout, and a NeoPixel channel.
2. **Material**: Use PLA Basic or PLA Matte. Consider using PETG Transparent/Translucent for the light-diffusing sections (utilizing the Bambu H2D's multi-color capabilities).
3. **Slicing**: Use Bambu Studio. Avoid floating cantilevers inside the hidden compartment and enable supports where necessary.

### Next Steps (Initial Prototyping)
1. Get a breadboard, Particle Photon, and photoresistor.
2. Write a basic script to turn the onboard blue LED (`D7`) on/off when the sensor is covered.
3. Integrate the NeoPixels and LCD screen sequentially.
4. Decide on the audio implementation (Hardware vs. Wizard of Oz).
