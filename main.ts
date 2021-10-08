input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendNumber(1)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # . # .
        . . # . .
        `)
    radio.sendNumber(4)
})
radio.setGroup(1)
basic.forever(function () {
	
})
