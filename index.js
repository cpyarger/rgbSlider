/* jshint undef: true, node: true */

var express = require('express');
//var piblaster = require('pi-blaster.js');
var path = require('path');
var app = express();




//Serve public content - basically any file in the public folder will be available on the server.
app.use(express.static(path.join(__dirname, 'public')));

//We also need 3 services - Red, Green and Blue.
// Each section is doing exactly the same but for a particular color.
// First, we grab the value and if it is an integer we are dividing it by 255 and sending it to the pi-blaster daemon.
var net = require('net');
var redValue = 0;
var greenValue =0;
var blueValue= 0;
var client = new net.Socket();
client.connect(23, '192.168.42.152', function() {
app.get('/red/:value', function (req, res) {
    console.log("red = " + req.params.value);
    redValue = req.params.value;
    if( !isNaN( parseInt(redValue) ) ){
      client.write('pwm '+redValue*255+' '+ greenValue*255 +' '+blueValue*255 +' \n');
        //piblaster.setPwm(RED_GPIO_PIN, redValue/255);
        res.send('ok');
    } else {
        res.status(400).send('error');
    }
});

app.get('/green/:value', function (req, res) {
    console.log("green = " + req.params.value);
    greenValue = req.params.value;
    if( !isNaN( parseInt(greenValue) ) ){
      client.write('pwm '+redValue*255+' '+ greenValue*255 +' '+blueValue*255 +' \n');
        //piblaster.setPwm(GREEN_GPIO_PIN, greenValue/255);
        res.send('ok');
    } else {
        res.status(400).send('error');
    }
});

app.get('/blue/:value', function (req, res) {
    console.log("blue = " + req.params.value);
    blueValue = req.params.value;
    if( !isNaN( parseInt(blueValue) ) ){
      client.write('pwm '+redValue*255+' '+ greenValue*255 +' '+blueValue*255 +' \n');
        //piblaster.setPwm(BLUE_GPIO_PIN, blueValue/255);
        res.send('ok');
    } else {
        res.status(400).send('error');
    }
});
});
// Start listening on port 3000.
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('RGB LED Slider listening at http://%s:%s', host, port);
});
