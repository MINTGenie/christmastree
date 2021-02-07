input.onButtonPressed(Button.A, function () {
    jingle = true
    counter = 0
})
input.onButtonPressed(Button.B, function () {
    jingle = false
    counter = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else if (name == "z") {
        z = value
    } else if (name == "a") {
        jingle = true
        counter = 0
    } else if (name == "b") {
        ledON = true
    } else if (name == "c") {
        ledON = false
    }
})
let z = 0
let y = 0
let x = 0
let ledON = false
let jingle = false
let counter = 0
radio.setGroup(1)
counter = 0
let strip = neopixel.create(DigitalPin.P2, 150, NeoPixelMode.RGB)
jingle = false
ledON = true
basic.forever(function () {
    if (ledON) {
        strip.shift(1)
        strip.setPixelColor(0, neopixel.rgb(x, y, z))
        strip.setBrightness(20)
        strip.show()
    }
})
basic.forever(function () {
    if (jingle && counter < 2) {
        counter += 1
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(20)
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(500)
    } else if (counter == 2) {
        counter += 1
        jingle = false
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
})
