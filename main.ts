basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
