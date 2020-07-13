function right2 (lSpeed: number, rSpeed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, lSpeed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, rSpeed)
}
function left2 (lSpeed: number, rSpeed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, lSpeed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, rSpeed)
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
function backward2 (lSpeed: number, rSpeed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, lSpeed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, rSpeed)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RXData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (RXData.compare("F") == 0) {
        basic.showString("F")
        forward2(200, 200)
    } else if (RXData.compare("L") == 0) {
        basic.showString("L")
        left2(128, 128)
    } else if (RXData.compare("R") == 0) {
        basic.showString("R")
        right2(128, 128)
    } else if (RXData.compare("B") == 0) {
        basic.showString("R")
        backward2(200, 200)
    } else {
        if (RXData.compare("S") == 0) {
            basic.showString("S")
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
function forward2 (lSpeed: number, rSpeed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, lSpeed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, rSpeed)
}
let RXData = ""
bluetooth.startTemperatureService()
bluetooth.startUartService()
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    `)
RXData = ""
basic.forever(function () {
	
})
