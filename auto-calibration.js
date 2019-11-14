// Set up process
function dryRead(dryReading: number) { // reads dryness levels
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    dryReading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return dryReading
    basic.pause(1000)
}
function wetRead(wetReading: number) { // reads wetness level
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    wetReading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return wetReading
    basic.pause(1000)
}
function findAverage(average: number, num1: number, num2: number, num3: number) {
    average = (num1 + num2 + num3) / 3
    return average
}
//variables
let moist = 0;
let wetReading = 0;
let dryReading = 0;
let wetReading3 = 0;
let dryReading3 = 0;
let wetReading2 = 0;
let dryReading2 = 0;
let wetReading1 = 0;
let dryReading1 = 0;
let dryAverage = 0;
let wetAverage = 0;
let scalelevel = 0;
// main program code
dryReading1 = dryRead(dryReading1) //records first dry reading
wetReading1 = wetRead(wetReading1) // records first wet reading
dryReading2 = dryRead(dryReading2) // records second dry reading
wetReading2 = wetRead(wetReading2) // records second wet reading
dryReading3 = dryRead(dryReading3) // records third dry readying
wetReading3 = wetRead(wetReading3) // records third wet reading
dryAverage = findAverage(dryAverage, dryReading1, dryReading2, dryReading3)// takes the average for all dry readings
wetAverage = findAverage(wetAverage, wetReading1, wetReading2, wetReading3)// takes the average for all wet readings
basic.showString("Calibration Success")

basic.forever(function () { // shows the level of wetness/dryness
    pins.digitalWritePin(DigitalPin.P8, 1)
    moist = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    scalelevel = pins.map(moist, dryAverage, wetAverage, 4, 0)
    for (let x = 0; x <= 5 - 1; x++) { //plots leds to show wetness/ dryness
        for (let y = 5; y > scalelevel; y--) {

            led.plot(x, y)

        }
    }
    basic.pause(1000)
    for (let z = 0; z <= 5 - 1; z++) { //unplots led to take new reading
        for (let a = 5; a > scalelevel; a--) {

            led.unplot(z, a)

        }
    }
})
