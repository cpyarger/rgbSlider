# RGB-slider
This is a remake of the RGB slider by Jason Forest

It connects to an RGB Light over TCP and controls the RGB values

it sends messages such as
"pwm 0 12344 65535 1000"

To change the ESP32 you are connecting to.
change line  22 of index.js

```client.connect(PORT, 'IP ADDRESS', function() {```
ex...
```client.connect(23, '192.168.42.152', function() {```
