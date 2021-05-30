#!/usr/bin/env python
import serial
import math
from config import *
from datab import *
from seriale import *


ser = serial.Serial(
    port=porta_seriale,
    baudrate=115200,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
    timeout=1
)

db = Database()


def main():
    is_end = False
    while not ser.inWaiting():
        None
    while ser.inWaiting():
        if not is_end:
            if ser.inWaiting():
                temp = ser.readline()
                if "sp\n" in str(temp.decode()):
                    [messaggio, is_end] = parse_data(ser)
                    if not is_end:
                        db.upload_data(messaggio, id_gateway)
                    else:
                        print("Errore nella lettura del buffer")

                elif ("Request DateTime " + str(id_gateway) + "\r\n") in str(temp.decode()):
                    ser.write(str("DateTime").encode())
                    ser.write(str(",").encode())
                    ser.write(str(id_gateway).encode())
                    ser.write(str(",").encode())
                    ser.write((str(math.ceil(time.time()))).encode())
                    ser.write("\n".encode())

                elif ("Request ID " + str(id_gateway) + "\r\n") in str(temp.decode()):
                    arr = db.request_add(id_gateway)
                    ser.write("ID".encode())
                    ser.write(str(",").encode())
                    ser.write(str(id_gateway).encode())
                    ser.write(str(",").encode())
                    ser.write(str(len(arr)).encode())
                    ser.write(str(",").encode())

                    for el in arr:
                        ser.write(str(el).encode())
                        ser.write(str(",").encode())
                    ser.write("\n".encode())
                tempo = time.perf_counter()
                while not ser.inWaiting():
                    None
                while ser.inWaiting():
                    if (time.perf_counter() - tempo) > TIMEOUT_ACK:  # timeout ricezione ack
                        is_end = True
                        print("Timeout ricezione ack")
                        break
                    else:
                        temp = ser.readline().decode()
                        if "ack\r\n" in str(temp):
                            print('Finito ciclo richiesta')
        else:
            break


while True:
    main()
