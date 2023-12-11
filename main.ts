input.onPinPressed(TouchPin.P0, function () {
    click_count += 1
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let RESPONSE_TIME = 0
let time = 0
let click_count = 0
keyboard.startKeyboardService()
let ClickStartFlg = true
basic.forever(function () {
    if (click_count == 1) {
        if (ClickStartFlg) {
            time = input.runningTime()
            ClickStartFlg = false
        }
    }
    RESPONSE_TIME = (input.runningTime() - time) / 1000
    if (RESPONSE_TIME > 1) {
        if (click_count == 1) {
            keyboard.sendString(keyboard.keys(keyboard._Key.right))
            ClickStartFlg = true
            click_count = 0
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (click_count == 2) {
            keyboard.sendString(keyboard.keys(keyboard._Key.left))
            ClickStartFlg = true
            click_count = 0
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
