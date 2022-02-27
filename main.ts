basic.forever(function () {
    if (input.compassHeading() > 315 && input.compassHeading() < 45) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        if (input.compassHeading() > 340) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # . # #
                # # # # #
                # # # # #
                `)
        }
    }
})
