let moist = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)//power on
    moist = pins.analogReadPin(AnalogPin.P0)//SIG
    pins.digitalWritePin(DigitalPin.P8, 0)//power off
    let scalelevel = pins.map(moist, 50, 840, 0, 4)
    led.plot(0, scalelevel) // adjust the led to read level of wetness.
    //the lower the led goes, the more wet the reading is
    basic.pause(1000)
    led.unplot(0, scalelevel) // adjusts to remove the led after reading the level of wetness
})
// dry 50 reading
// wet 840 reading
