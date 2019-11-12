basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) { // lights up led if 1 is detected
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P16, 0) // led turns off if 0 is detected
    }
})
