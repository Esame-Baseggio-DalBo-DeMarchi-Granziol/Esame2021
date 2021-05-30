#!/usr/bin/env python
import mysql.connector
from classidata import *
from config import *


class Database:

    def __init__(self):
        self.db = mysql.connector.connect(
            host=hostname,
            user=username,
            password=password,
            database=database
        )
        self.db_cursor = self.db.cursor()

    def upload_data(self, messaggio, ig_gate):
        querySd = "INSERT INTO "+ str(TbTx) +" (id_gate,"

        for i in range(len(indiciStationDB)):
            querySd += indiciStationDB[i] + ","
            if i == (len(indiciStationDB) - 2):
                querySd += indiciStationDB[i+1] + ") VALUES ('" + str(ig_gate) + "'"
                break
        for i in indiciStationDB:
            if messaggio.sd[i] is not None:
                querySd += ",'" + str(messaggio.sd[i]) + "'"
            else:
                querySd += ",NULL"
        querySd += ")"
        print(querySd)
        self.db_cursor.execute(querySd)

        if messaggio.sd["letture"] != 0:           # se è diverso da 0 ci sono delle letture
            for lettura in messaggio.lista:
                queryData = "INSERT INTO "+ str(TbLetture) +" (id_tx,id_gate,id_end,"

                for i in range(len(indiciDataDB)):
                    queryData += indiciDataDB[i] + ","
                    if i == (len(indiciDataDB) - 2):
                        queryData += indiciDataDB[i + 1] + ") VALUES (LAST_INSERT_ID(),'" + str(ig_gate) + "','" + str(messaggio.sd["id_end"]) + "'"
                        break

                for dato in indiciDataDB:
                    if lettura[dato] is not None:
                        queryData += ",'" + str(lettura[dato]) + "'"
                    else:
                        queryData += ",NULL"
                queryData += ")"
                print(queryData)
                self.db_cursor.execute(queryData)

        self.db.commit()

    def request_add(self, ig_gate) -> []:
        add = []
        query = "SELECT id_end FROM "+ str(TbEndnode) +" WHERE id_gate = " + str(ig_gate)
        self.db_cursor.execute(query)
        res = self.db_cursor.fetchall()
        for el in range(len(res)):
            add.append(int(str(res[el][0])))
            print(add)
        return add
