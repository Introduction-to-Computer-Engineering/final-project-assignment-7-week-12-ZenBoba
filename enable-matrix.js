pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    for (let index = 0; index <= 1024; index++) { // lights up the leds continously
        basic.clearScreen()
        pins.analogWritePin(AnalogPin.P8, index)
        pins.analogWritePin(AnalogPin.P12, index)
        pins.analogWritePin(AnalogPin.P16, index)
        if (index == 500) { // shows the led matrix is displayed
            basic.plotLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.plotLeds(`
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(1000)
        }
    }
})
