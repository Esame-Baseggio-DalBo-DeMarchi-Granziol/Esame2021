import re
from classidata import *


'''def get_config(conf):
    regex1 = "\s*" + str(conf) + "\s*=\s*"
    regex2 = "\s*[\n]"
    for line in lines:
        if str(conf) in line:
            x = re.split(regex1, line)
            text = re.split(regex2, x[1])
            return text[0]


with open('./config.txt', 'r') as f:
    lines = f.readlines()'''

f = open("configGateway.json", "r")
config = json.loads(f.read())
f.close()

hostname = config["hostname"]
username = config["username"]
password = config["password"]
database = config["nome_database"]
id_gateway = int(config["id_gateway"])
TbTx = config["tb_trasmissioni"]
TbLetture = config["tb_letture"]
TbEndnode = config["tb_endnode"]
porta_seriale = config["porta_seriale"]

f = open("configSensors.json", "r")
config = json.loads(f.read())
f.close()

ena_am2315 = True if config["AM2315"] == "enable" else False
ena_bme280 = True if config["BME280"] == "enable" else False
ena_pm = True if config["PM_Sensor"] == "enable" else False
ena_ads1115_1 = True if config["ADS1115_1"] == "enable" else False
ena_ads1115_2 = True if config["ADS1115_2"] == "enable" else False
ena_lsm9ds1 = True if config["LSM9DS1"] == "enable" else False
ena_anemometro = True if config["Sen0186"] == "enable" else False

if ena_am2315 and (config["temp_ext"] == "enable"):
    indiciDataDB.append("temperatura_esterna_media")
    indiciDataDB.append("temperatura_esterna_deviazione")
if ena_am2315 and (config["umidita_ext"] == "enable"):
    indiciDataDB.append("umidita_esterna_media")
    indiciDataDB.append("umidita_esterna_deviazione")
if ena_bme280 and (config["temp_int"] == "enable"):
    indiciDataDB.append("temperatura_interna_media")
    indiciDataDB.append("temperatura_interna_deviazione")
if ena_bme280 and (config["umidita_int"] == "enable"):
    indiciDataDB.append("umidita_interna_media")
    indiciDataDB.append("umidita_interna_deviazione")
if ena_bme280 and (config["pressione"] == "enable"):
    indiciDataDB.append("pressione_media")
    indiciDataDB.append("pressione_deviazione")
if ena_pm and (config["pm1"] == "enable"):
    indiciDataDB.append("pm1_media")
    indiciDataDB.append("pm1_deviazione")
if ena_pm and (config["pm2_5"] == "enable"):
    indiciDataDB.append("pm2_5_media")
    indiciDataDB.append("pm2_5_deviazione")
if ena_pm and (config["pm10"] == "enable"):
    indiciDataDB.append("pm10_media")
    indiciDataDB.append("pm10_deviazione")
if ena_ads1115_1 and config["ozono1"] == "enable":
    indiciDataDB.append("ozono1_media")
    indiciDataDB.append("ozono1_deviazione")
if ena_ads1115_1 and config["ozono2"] == "enable":
    indiciDataDB.append("ozono2_media")
    indiciDataDB.append("ozono2_deviazione")
if ena_ads1115_2 and config["ozono3"] == "enable":
    indiciDataDB.append("ozono3_media")
    indiciDataDB.append("ozono3_deviazione")
if ena_ads1115_2 and config["ozono4"] == "enable":
    indiciDataDB.append("ozono4_media")
    indiciDataDB.append("ozono4_deviazione")
if ena_lsm9ds1 and (config["accellerometro"] == "enable"):
    indiciDataDB.append("accellX_media")
    indiciDataDB.append("accellY_media")
    indiciDataDB.append("accellZ_media")
    indiciDataDB.append("accellX_deviazione")
    indiciDataDB.append("accellY_deviazione")
    indiciDataDB.append("accellZ_deviazione")
if ena_lsm9ds1 and (config["magnetometro"] == "enable"):
    indiciDataDB.append("magX_media")
    indiciDataDB.append("magY_media")
    indiciDataDB.append("magZ_media")
    indiciDataDB.append("magX_deviazione")
    indiciDataDB.append("magY_deviazione")
    indiciDataDB.append("magZ_deviazione")
if ena_lsm9ds1 and (config["giroscopio"] == "enable"):
    indiciDataDB.append("gyroX_media")
    indiciDataDB.append("gyroY_media")
    indiciDataDB.append("gyroZ_media")
    indiciDataDB.append("gyroX_deviazione")
    indiciDataDB.append("gyroY_deviazione")
    indiciDataDB.append("gyroZ_deviazione")
if ena_anemometro and (config["direzione_vento"] == "enable"):
    indiciDataDB.append("direzione_del_vento_media")
    indiciDataDB.append("direzione_del_vento_deviazione")
if ena_anemometro and (config["velocita_vento"] == "enable"):
    indiciDataDB.append("velocità_del_vento_media")
    indiciDataDB.append("velocità_del_vento_deviazione")
if ena_anemometro and (config["quantita_pioggia"] == "enable"):
    indiciDataDB.append("quantità_di_pioggia_media")
    indiciDataDB.append("quantità_di_pioggia_deviazione")
