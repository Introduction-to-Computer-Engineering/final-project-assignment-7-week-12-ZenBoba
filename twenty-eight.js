function rotate() { // screensaver
    basic.forever(function () {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(250)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(250)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(250)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(250)
    })
}
pins.analogWritePin(AnalogPin.P8, 0) // Red LED
pins.analogWritePin(AnalogPin.P12, 0) // Yellow LED
pins.analogWritePin(AnalogPin.P16, 0) // Green LED
rotate()
basic.forever(function () {
    for (let index = 0; index <= 1024; index++) { // turns on red LED
        pins.analogWritePin(AnalogPin.P8, index)
    }
    basic.pause(500)
    for (let index = 1024; index >= 0; index--) { // turns off red LED
        pins.analogWritePin(AnalogPin.P8, index)
    }
    basic.pause(500)
    for (let index = 0; index <= 1024; index++) { // turns on yellow LED
        pins.analogWritePin(AnalogPin.P12, index)
    }
    basic.pause(500)
    for (let index = 1024; index >= 0; index--) { // turns off yellow LED
        pins.analogWritePin(AnalogPin.P12, index)
    }
    basic.pause(500)
    for (let index = 0; index <= 1024; index++) { // turns on green LED
        pins.analogWritePin(AnalogPin.P16, index)
    }
    basic.pause(500)
    for (let index = 1024; index >= 0; index--) { // turns off green LED
        pins.analogWritePin(AnalogPin.P16, index)
    }
    basic.pause(500)
})
