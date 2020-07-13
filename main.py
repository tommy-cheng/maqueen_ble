bluetooth.start_uart_service()
basic.show_leds("""
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    """)

def on_forever():
    pass
basic.forever(on_forever)
