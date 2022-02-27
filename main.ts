basic.forever(function () {
    if (input.compassHeading() > 338 && input.compassHeading() < 23) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (input.compassHeading() > 22 && input.compassHeading() < 68) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (input.compassHeading() > 67 && input.compassHeading() < 113) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # # #
            # # . . .
            # . . . .
            `)
    } else if (input.compassHeading() > 112 && input.compassHeading() < 158) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            . . . # .
            . . . . #
            `)
    } else if (input.compassHeading() > 157 && input.compassHeading() < 203) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (input.compassHeading() > 202 && input.compassHeading() < 248) {
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . # . . .
            # . . . .
            `)
    } else if (input.compassHeading() > 247 && input.compassHeading() < 293) {
        basic.showLeds(`
            . . . . #
            . . . # #
            # # # # #
            . . . # #
            . . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # # #
            . . # # #
            . . # # #
            `)
    }
})
