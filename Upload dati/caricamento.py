from datab import *
import random

db = Database()

GAT_ID = 12

numerogionimesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

anno = 2021
mese = 1
giorno = 1
ora = 0
minuto = 0
secondo = 0


while True:
    print("ritorno inizio while")
    if minuto == 60:
        minuto = 0
        ora = ora + 1
    if ora == 24:
        ora = 0
        giorno = giorno + 1
    if giorno == numerogionimesi[mese]:
        if mese == 12:
            break
        giorno = 1
        mese = mese + 1

    sd = stationData

    sd["datatime"] = datetime.now().replace(microsecond=0)
    sd["id_end"] = 3
    sd["letture"] = 2
    sd["BatteryVoltage"] = float(random.randint(-500, 1000))
    sd["BatteryCurrent"] = float(random.randint(-500, 1000))
    sd["SN"] = float(random.randint(-500, 1000))
    sd["RSSI"] = float(random.randint(-500, 1000))

    reset(reading)
    lista = []
    for i in range(2):
        reading[indiciDataDB[0]] = str(datetime(anno, mese, giorno, ora, minuto, secondo))
        for index in range(1, len(indiciDataDB)):
            reading[indiciDataDB[index]] = float(random.randint(-500, 1000))
        minuto = minuto + 15
        lista.append(reading.copy())

    messaggio = Message(sd, lista)

    db.upload_data(messaggio, GAT_ID)