#define NUMBER_XOR_KEYS 2
#define NUMBER_PBOX_SBOX_KEYS 2

#if NUMBER_XOR_KEYS > 10
#error superato il numero massimo di chiavi XOR. Il valore inserito deve essere minore o uguale a 10
#endif

#if NUMBER_PBOX_SBOX_KEYS > 10 
#error superato il numero massimo di chiavi P-BOX/S-box. Il valore inserito deve essere minore o uguale a 10
#endif

#if NUMBER_XOR_KEYS < 1
#error numero minimo di chiavi è 1 
#endif

#if NUMBER_PBOX_SBOX_KEYS < 1
#error numero minimo di chiavi è 1
#endif

//CHIAVI XOR
const unsigned int XOR[NUMBER_XOR_KEYS] =
{
#if (NUMBER_XOR_KEYS >= 1)
  49771,
#endif
#if (NUMBER_XOR_KEYS >= 2)
  31707,
#endif
#if (NUMBER_XOR_KEYS >= 3)
  3444,
#endif
#if (NUMBER_XOR_KEYS >= 4)
  51605,
#endif
#if (NUMBER_XOR_KEYS >= 5)
  2452,
#endif
#if (NUMBER_XOR_KEYS >= 6)
  8890,
#endif
#if (NUMBER_XOR_KEYS >= 7)
  17407,
#endif
#if (NUMBER_XOR_KEYS >= 8)
  57756,
#endif
#if (NUMBER_XOR_KEYS >= 9)
  42301,
#endif
#if (NUMBER_XOR_KEYS >= 10)
  28342
#endif
};

//CHIAVI P-BOX
const uint8_t P_BOX[NUMBER_PBOX_SBOX_KEYS][16] =
{
#if (NUMBER_PBOX_SBOX_KEYS >= 1)
  {0, 2, 7, 10, 13, 15, 8, 9, 6, 12, 14, 11, 4, 5, 1, 3},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 2)
  {6, 10, 2, 3, 9, 4, 8, 0, 7, 1, 5, 15, 13, 14, 11, 12},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 3)
  {0, 1, 7, 13, 8, 3, 14, 4, 10, 6, 12, 2, 5, 11, 15, 9},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 4)
  {11, 1, 6, 15, 13, 0, 4, 5, 7, 10, 12, 8, 3, 9, 2, 14},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 5)
  {8, 15, 5, 0, 11, 3, 9, 12, 2, 1, 6, 7, 4, 14, 13, 10},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 6)
  {5, 15, 1, 4, 13, 8, 12, 6, 11, 14, 9, 7, 3, 0, 2, 10},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 7)
  {10, 11, 5, 4, 13, 6, 9, 14, 1, 2, 12, 15, 7, 3, 0, 8},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 8)
  {1, 8, 4, 3, 9, 14, 13, 11, 7, 15, 12, 10, 0, 2, 6, 5},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 9)
  {10, 8, 0, 9, 15, 4, 13, 5, 7, 14, 11, 2, 1, 6, 3, 12},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 10)
  {11, 2, 1, 3, 15, 13, 10, 12, 6, 0, 7, 4, 8, 9, 14, 5}
#endif
};

//CHIAVI S-BOX
const uint8_t S_BOX[NUMBER_PBOX_SBOX_KEYS][16] =
{
#if (NUMBER_PBOX_SBOX_KEYS >= 1)
  {2, 15, 4, 10, 8, 12, 1, 14, 7, 5, 9, 0, 6, 13, 11, 3},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 2)
  {10, 9, 0, 2, 6, 8, 3, 14, 15, 11, 4, 5, 12, 7, 1, 13},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 3)
  {14, 6, 8, 7, 15, 11, 5, 10, 1, 0, 9, 13, 3, 4, 12, 2},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 4)
  {12, 8, 0, 11, 10, 13, 5, 6, 14, 4, 3, 1, 7, 9, 15, 2},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 5)
  {14, 5, 10, 7, 4, 13, 12, 9, 6, 1, 8, 3, 0, 15, 11, 2},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 6)
  {7, 13, 2, 3, 6, 5, 14, 10, 8, 0, 11, 15, 1, 4, 12, 9},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 7)
  {7, 13, 6, 4, 3, 9, 11, 1, 5, 2, 15, 0, 8, 10, 14, 12},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 8)
  {11, 7, 1, 9, 12, 5, 14, 0, 15, 6, 4, 2, 10, 3, 13, 8},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 9)
  {14, 15, 12, 3, 1, 0, 6, 2, 11, 7, 9, 5, 4, 13, 8, 10},
#endif
#if (NUMBER_PBOX_SBOX_KEYS >= 10)
  {14, 15, 10, 13, 8, 7, 11, 2, 1, 0, 4, 5, 6, 12, 3, 9}
#endif
};

//FUNZIONE DI CIFRATURA
unsigned int cypher(unsigned int _plaintext)
{
  unsigned int plaintext = _plaintext, temp[16] = {0}, arr[16] = {0};

  Serial.println("----------------");

  for (int k = 0; k <= NUMBER_PBOX_SBOX_KEYS - 1 ; k++)
  {

    //stampa la chiave P-BOX
    Serial.print("KEY P-BOX: ");
    for (int i = 0; i < 16; i++)
    {
      Serial.print(P_BOX[k][i]);
      Serial.print(" ");
    }
    Serial.println();

    //stampa la chiave S-BOX
    Serial.print("KEY S-BOX: ");
    for (int i = 0; i < 16; i++)
    {
      Serial.print(S_BOX[k][i]);
      Serial.print(" ");
    }
    Serial.println();


    for (int p = 0; p <= NUMBER_XOR_KEYS - 1; p++) {

      //stampa la chiave XOR
      Serial.print("KEY XOR: ");
      for (int i = 0; i < 16; i++) {
        Serial.print((unsigned int)bitRead(XOR[p], 15 - i));
        if (i % 4 == 3)Serial.print("  ");
      }
      Serial.println();
      Serial.println();

      //STAMPO IL PLAIN TEXT ATTUALE
      Serial.print("PLAIN: ");
      for (int i = 0; i < 16; i++)  {
        temp[i] = (unsigned int)bitRead(plaintext, 15 - i);
        Serial.print(temp[i]);
        if (i % 4 == 3)Serial.print("  ");
      }
      Serial.println();


      //XOR tra chiave XOR e PLAINTEXT
      plaintext ^= XOR[p];

      // stampo il risultato della fase di XOR
      Serial.print("XOR:    ");
      for (int i = 0; i < 16; i++)  {
        temp[i] = (unsigned int)bitRead(plaintext, 15 - i);
        Serial.print(temp[i]);
        if (i % 4 == 3)Serial.print("  ");
      }
      Serial.println();

      // eseguo la P_BOX e stampo il risultato
      Serial.print("PBOX:   ");
      for (int i = 15; i >= 0; i--)  {
        temp[i] = (unsigned int)bitRead(plaintext, P_BOX[k][i]);
        Serial.print(temp[i]);
        if ((15 - i) % 4 == 3)Serial.print("  ");
      }
      Serial.println();

      unsigned int cypher = 0;
      //unisco i bit in un unica variabile
      for (int i = 0; i < 16; i++) cypher |= temp[i] << i;
      plaintext  = 0;

      //eseguo S_BOX
      for (int i = 0; i < 4; i++)   plaintext |= S_BOX[k][((unsigned int)cypher >> (i * 4) & 15)] << (4 * i);

      //stampo risultato S_BOX
      Serial.print("SBOX:   ");
      for (int i = 15; i >= 0; i--)  {
        temp[i] = (unsigned int)bitRead(plaintext, i);
        Serial.print(temp[i]);
        if ((15 - i) % 4 == 3)Serial.print("  ");
      }
      Serial.println();
    }
  }

  //stampo messaggio CIFRATO
  Serial.print("CYPHER: ");
  for (int i = 0; i < 16; i++)  {
    temp[i] = (unsigned int)bitRead(plaintext, 15 - i);
    Serial.print(temp[i]);
    if (i % 4 == 3)Serial.print("  ");
  }
  Serial.println();
  Serial.println("----------------");

  return plaintext;
}


//FUNZIONE DI DECIFRATURA
unsigned int decypher(unsigned int _cypher)
{
  unsigned int cypher = _cypher, arr_temp[4] = {0}, arr_temp_16[16] = {0}, temp = 0, decypher = 0;

  Serial.println("----------------");
  for (int j = NUMBER_PBOX_SBOX_KEYS - 1; j >= 0 ; j--)
  {

    //stampa la chiave P-BOX
    Serial.print("KEY P-BOX: ");
    for (int i = 0; i < 16; i++)
    {
      Serial.print(P_BOX[j][i]);
      Serial.print(" ");
    }
    Serial.println();

    //stampa la chiave S-BOX
    Serial.print("KEY S-BOX: ");
    for (int i = 0; i < 16; i++)
    {
      Serial.print(S_BOX[j][i]);
      Serial.print(" ");
    }
    Serial.println();

    for (int p = NUMBER_XOR_KEYS - 1; p >= 0; p--)
    {
      //stampa chiave XOR
      Serial.print("KEY XOR: ");
      for (int i = 0; i < 16; i++) {
        Serial.print((unsigned int)bitRead(XOR[p], 15 - i));
        if (i % 4 == 3)Serial.print("  ");
      }
      Serial.println();
      Serial.println();

      //stampo il messaggio CIFRATO attuale
      Serial.print("CYPHER: ");
      for (int i = 0; i < 16; i++)  {
        arr_temp_16[i] = (unsigned int)bitRead(cypher, 15 - i);
        Serial.print(arr_temp_16[i]);
        if (i % 4 == 3)Serial.print("  ");
      }
      Serial.println();

      //eseguo la REVERSE-S_BOX
      for (int k = 0; k < 4 ; k++) {
        for (int i = 0; i < 16; i++) {
          if (((unsigned int)cypher >> (k * 4) & 15) == S_BOX[j][i] ) {
            arr_temp[k] = i;
            break;
          }
        }
      }

      temp = 0;
      for (int i = 0; i < 4; i++) temp |=  arr_temp[i] << (4 * i); //unisco i 4 blocchi in un unica varibile

      //stampo i risultati della REVERSE-S_BOX
      Serial.print("REVERSE SBOX:  ");
      for (int i = 15; i >= 0; i--)  {
        arr_temp_16[i] = (unsigned int)bitRead(temp, i);
        Serial.print(arr_temp_16[i]);
        if ((15 - i) % 4 == 3)Serial.print("  ");
      }
      Serial.println();

      //eseguo la REVERSE-P_BOX
      for (int i = 0; i < 16; i++) arr_temp[P_BOX[j][i]] = bitRead(temp, i); //reverse P_BOX
      temp = 0;
      for (int i = 0; i < 4; i++) temp |=  arr_temp[i] << (4 * i); //unisco i 4 blocchi in un unica varibile

      //eseguo la REVERSE-P_BOX e stampo il risulato
      Serial.print("REVERSE PBOX:  ");
      for (int i = 15; i >= 0; i--)  {
        arr_temp_16[i] = (unsigned int)bitRead(temp, i);
        Serial.print(arr_temp_16[i]);
        if ((15 - i) % 4 == 3)Serial.print("  ");
      }
      Serial.println();


      decypher = 0;
      for (int i = 0; i < 16; i++) decypher |= arr_temp[i] << i; //unisco in una sola varibile

      //eseguo la XOR
      cypher = decypher ^ XOR[p];

      //stampo il risultato della XOR
      Serial.print("REVERSE XOR:   ");
      for (int i = 15; i >= 0; i--)  {
        arr_temp_16[i] = (unsigned int)bitRead(cypher, i);
        Serial.print(arr_temp_16[i]);
        if ((15 - i) % 4 == 3)Serial.print("  ");
      }
      Serial.println();
    }
  }
  Serial.println("----------------");
  return cypher;
}

void setup() {
  Serial.begin(9600);
  //TESTO ORIGINALE
  unsigned int plaintext = 10;
  Serial.println("PLAINTEXT: " + String(plaintext));
  unsigned int cifrato = cypher(plaintext);
  Serial.println("PLAINTEXT: " + String(cifrato));
  unsigned int decifrato = decypher(cifrato);
  Serial.println("MESSAGGIO DECIFRATO: " + String(decifrato));

}

void loop() {
  // put your main code here, to run repeatedly:

}
