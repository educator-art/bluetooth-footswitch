input.onPinPressed(TouchPin.P0, function () {
    click_count += 1
})
let RESPONSE_TIME = 0
let click_count = 0
keyboard.startKeyboardService()
let time = input.runningTime()
basic.forever(function () {
    RESPONSE_TIME = input.runningTime() - time
    if (RESPONSE_TIME > 2) {
        if (click_count == 2) {
            keyboard.sendString(keyboard.keys(keyboard._Key.left))
            basic.showLeds(`
                # # # # .
                # . . . #
                # . . . #
                # . . . #
                # # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (click_count == 1) {
            keyboard.sendString(keyboard.keys(keyboard._Key.right))
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        click_count = 0
        RESPONSE_TIME = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(2000)
        time = input.runningTime()
    }
})
