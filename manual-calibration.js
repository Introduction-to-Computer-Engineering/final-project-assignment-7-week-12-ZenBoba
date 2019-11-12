let moist = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)//power on
    moist = pins.analogReadPin(AnalogPin.P0)//SIG
    pins.digitalWritePin(DigitalPin.P8, 0)//power off
    let scalelevel = pins.map(moist, 50, 840, 4, 0)
    for (let x = 0; x < 5; x++) { // portion of the led matrix light up depending on wetness
        for (let y = 5; y > scalelevel; y--) {
            led.plot(x, y)
        }
    }
    basic.pause(1000)
    for (let x = 0; x < 5; x++) { // unplots the leds allowing another reading to be done
        for (let y = 5; y > scalelevel; y--) {
            led.unplot(x, y)
        }
    }
})
// dry 50 reading
// wet 840 reading
