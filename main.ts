let ring = neopixel.create(DigitalPin.P0, 9, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        ring.show()
        basic.pause(50)
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        ring.show()
        basic.pause(50)
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        ring.show()
        basic.pause(50)
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        ring.show()
    }
})
