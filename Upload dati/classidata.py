#!/usr/bin/env python
from dataclasses import dataclass
from datetime import datetime
import json

indiciStation = [
    "datatime",
    "id_end",
    "letture",
    "BatteryVoltage",
    "BatteryCurrent",
    "SN",
    "RSSI"
]

indiciStationDB = [
    "datatime",
    "id_end",
    "letture",
    "BatteryVoltage",
    "BatteryCurrent",
    "SN",
    "RSSI"
]

indiciData = [
    "datatime",
    "temperatura_esterna_media",
    "temperatura_interna_media",
    "temperatura_esterna_deviazione",
    "temperatura_interna_deviazione",
    "umidita_esterna_media",
    "umidita_interna_media",
    "umidita_esterna_deviazione",
    "umidita_interna_deviazione",
    "pressione_media",
    "pressione_deviazione",
    "pm1_media",
    "pm2_5_media",
    "pm10_media",
    "pm1_deviazione",
    "pm2_5_deviazione",
    "pm10_deviazione",
    "ozono1_media",
    "OZO_12",
    "ozono2_media",
    "OZO_22",
    "ozono3_media",
    "OZO_32",
    "ozono4_media",
    "OZO_42",
    "ozono1_deviazione",
    "OZO_12_sd",
    "ozono2_deviazione",
    "OZO_22_sd",
    "ozono3_deviazione",
    "OZO_32_sd",
    "ozono4_deviazione",
    "OZO_42_sd",
    "accellX_media",
    "accellY_media",
    "accellZ_media",
    "accellX_deviazione",
    "accellY_deviazione",
    "accellZ_deviazione",
    "magX_media",
    "magY_media",
    "magZ_media",
    "magX_deviazione",
    "magY_deviazione",
    "magZ_deviazione",
    "gyroX_media",
    "gyroY_media",
    "gyroZ_media",
    "gyroX_deviazione",
    "gyroY_deviazione",
    "gyroZ_deviazione",
    "direzione_del_vento_media",
    "velocità_del_vento_media",
    "quantità_di_pioggia_media",
    "velocità_del_vento_deviazione",
    "direzione_del_vento_deviazione",
    "quantità_di_pioggia_deviazione"
]

indiciDataDB = [        # viene aggiornata su config.py
    "datatime"          # : "time",
]

reading= {
    "datatime": str,
    "temperatura_esterna_media": float,
    "temperatura_interna_media": float,
    "temperatura_esterna_deviazione": float,
    "temperatura_interna_deviazione": float,
    "umidita_esterna_media": float,
    "umidita_interna_media": float,
    "umidita_esterna_deviazione": float,
    "umidita_interna_deviazione": float,
    "pressione_media": float,
    "pressione_deviazione": float,
    "pm1_media": float,
    "pm2_5_media": float,
    "pm10_media": float,
    "pm1_deviazione": float,
    "pm2_5_deviazione": float,
    "pm10_deviazione": float,
    "ozono1_media": float,
    "OZO_12": float,
    "ozono2_media": float,
    "OZO_22": float,
    "ozono3_media": float,
    "OZO_32": float,
    "ozono4_media": float,
    "OZO_42": float,
    "ozono1_deviazione": float,
    "OZO_12_sd": float,
    "ozono2_deviazione": float,
    "OZO_22_sd": float,
    "ozono3_deviazione": float,
    "OZO_32_sd": float,
    "ozono4_deviazione": float,
    "OZO_42_sd": float,
    "accellX_media": float,
    "accellY_media": float,
    "accellZ_media": float,
    "accellX_deviazione": float,
    "accellY_deviazione": float,
    "accellZ_deviazione": float,
    "magX_media": float,
    "magY_media": float,
    "magZ_media": float,
    "magX_deviazione": float,
    "magY_deviazione": float,
    "magZ_deviazione": float,
    "gyroX_media": float,
    "gyroY_media": float,
    "gyroZ_media": float,
    "gyroX_deviazione": float,
    "gyroY_deviazione": float,
    "gyroZ_deviazione": float,
    "direzione_del_vento_media": float,
    "velocità_del_vento_media": float,
    "quantità_di_pioggia_media": float,
    "velocità_del_vento_deviazione": float,
    "direzione_del_vento_deviazione": float,
    "quantità_di_pioggia_deviazione": float
}


stationData = {
    "datatime": datetime,
    "id_end": str,
    "letture": int,
    "BatteryVoltage": float,
    "BatteryCurrent": float,
    "SN": str,
    "RSSI": str
}


@dataclass
class Message():
    sd: stationData
    lista : []


def reset(list):
    for i in list:
        list[i] = None
