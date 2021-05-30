#!/usr/bin/env python
import time
from classidata import *

TIMEOUT_ = 16000
TIMEOUT_ACK = 10000
MIN_LUNG = 7

###
### LA STRUTTURA DEL MESSAGGIO
###
# 0 - sp
# 1 - l'indirizzo dell'endnode che ha inviato il pacchetto,
# 2 - il numero di letture,
# 3 - il voltaggio della batteria,
# 4 - la corrente della batteria,
# 5 - il S/N di LoRa e
# 6 - RSSI di LoRa.
# 7 - sr1 # START DEL PRIMO MESSAGGIO
# 8 - sr1_day
# 9 - sr1_month
# 10 - sr1_year
# 11 - sr1_hour
# 12 - sr1_minute
# 13 - sr1_second
# 14 - sr1_temp_ext
# 15 - sr1_temp_int
# 16 - sr1_temp_ext_sd
# 17 - sr1_temp_int_sd
# 18 - sr1_rh_ext
# 19 - sr1_rh_int
# 20 - sr1_rh_ext_sd
# 21 - sr1_rh_int_sd
# 22 - sr1_press
# 23 - sr1_press_sd
# 24 - sr1_PM1
# 25 - sr1_PM2.5
# 26 - sr1_PM10
# 27 - sr1_PM1_sd
# 28 - sr1_PM2.5_sd
# 29 - sr1_PM10_sd
# 30 - sr1_OZO_11
# 31 - sr1_OZO_12
# 32 - sr1_OZO_21
# 33 - sr1_OZO_22
# 34 - sr1_OZO_31
# 35 - sr1_OZO_32
# 36 - sr1_OZO_41
# 37 - sr1_OZO_42
# 38 - sr1_OZO_11_sd
# 39 - sr1_OZO_12_sd
# 40 - sr1_OZO_21_sd
# 41 - sr1_OZO_22_sd
# 42 - sr1_OZO_31_sd
# 43 - sr1_OZO_32_sd
# 44 - sr1_OZO_41_sd
# 45 - sr1_OZO_42_sd
# 46 - sr1_accX
# 47 - sr1_accY
# 48 - sr1_accZ
# 49 - sr1_accX_sd
# 50 - sr1_accY_sd
# 51 - sr1_accZ_sd
# 52 - sr1_magX
# 53 - sr1_magY
# 54 - sr1_magZ
# 55 - sr1_magX_sd
# 56 - sr1_magY_sd
# 57 - sr1_magZ_sd
# 58 - sr1_gyrX
# 59 - sr1_gyrY
# 60 - sr1_gyrZ
# 61 - sr1_gyrX_sd
# 62 - sr1_gyrY_sd
# 63 - sr1_gyrZ_sd
# 64 - sr1_windD
# 65 - sr1_windS
# 68 - sr1_rain_fall
# 67 - sr1_windD_sd
# 69 - sr1_windS_sd
# 69 - sr1_rain_fall_sd
# 70 - er1
# ...  per sr2 ... er2
# n  - ep


def parse_data(ser) -> [Message, bool]:
    sd = stationData
    lista = []
    error = False
    messaggio = Message(sd, lista)

    # Headers
    messaggio.sd["datatime"] = datetime.now().replace(microsecond=0)
    messaggio.sd["id_end"] = int(float(ser.readline().decode()))
    messaggio.sd["letture"] = int(float(ser.readline().decode()))
    messaggio.sd["BatteryVoltage"] = float(ser.readline().decode())
    messaggio.sd["BatteryCurrent"] = float(ser.readline().decode())
    messaggio.sd["SN"] = float(ser.readline().decode())
    messaggio.sd["RSSI"] = float(ser.readline().decode())

    # Actual data
    for r in range(messaggio.sd["letture"]):
        tempo = time.perf_counter()
        while not ser.inWaiting():     # aspetto che arrivi qualcosa sul buffer
            if (time.perf_counter() - tempo) > TIMEOUT_:
                error = True
                break
        reset(reading)
        while ser.inWaiting():
            temp = ser.readline().decode()
            if "sr" in str(temp):
                i = 1
                day = int(float(ser.readline().decode()))
                month = int(float(ser.readline().decode()))
                year = int(float(ser.readline().decode()))
                hour = int(float(ser.readline().decode()))
                minute = int(float(ser.readline().decode()))
                second = int(float(ser.readline().decode()))
                reading[indiciData[0]] = str(datetime(year, month, day, hour, minute, second))
                temp = ser.readline().decode()
                while not ("er" in str(temp)):  # manca controllo lunghezza array e riempire gli ultimi campi con null
                    reading[indiciData[i]] = float(temp)
                    temp = ser.readline().decode()
                    i += 1
                break
        lista.append(reading.copy())
    ser.readline()  # per togliere 'ep'

    # end Message
    return [messaggio, error]