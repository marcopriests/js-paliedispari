Boolean - Web Development

2° Mese: JAVASCRIPT

Esercizio 7

Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Numero minimo di push: 7

Consigli del giorno

    Scriviamo sempre in italiano i passaggi che vogliamo fare
    Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da farsi quando si crea una funzione:

    Come dovrebbe chiamarsi?
    Ho bisogno di parametri?
    Devo restituire un valore?
    Se sì, di che tipo?

Buon lavoro e buon divertimento!

Ragionamento Palindroma:

- creo la funzione con parametro stringa: isPalindrome(string)
    - al suo interno, creo una variabile "reverseWord" e la inizializzo come una stringa vuota.
    - creo un ciclo
        - assegno all'indice del ciclo le seguenti impostazioni:
            - let i = string.length - 1; per far si che i sia uguale al numero di lettere contenure nella parola da controllare
            - i >= 0; per far si che il ciclo continui finché non controlli tutte le lettere della parola
            - i--; per far si che il ciclo proceda dall'ultima lettera della parola inserita alla prima
        - all'interno del ciclo, concateno "reverseWord" creata in precedenza con tutte le singole lettere della parola inserita al contrario
    - fuori dal ciclo, effettuo un controllo per verificare se la parola inserita dall'utente e "reverseWord" combaciano
        - se si, inserirco return true
        - se no, inserisco return false

- dichiaro e inizializzo una variabile "userWord" in cui salverò la parola inserita dall'utente utilizzando prompt()

- richiamo la funzione isPalindrome(userWord)




Ragionamento Pari e Dispari:

- creo una funzione randomNum()
    - all'interno della funzione dichiaro una variabile "result" in cui assegno un valore numerico randomico compreso tra 1 e 5 utilizando Math.floor(Math.random() * 5 + 1)
    - inserisco un return di result

- creo una funzione playOddsAndEvens(user, cpu, choice)
    - all'interno della funzione assegno la somma delle variabili user + cpu ad una nuova variabile "sum"
    - inserisco un controllo per verificare se sum % 2 == 0 && se choice.toLowerCase() == "pari"
        - se si, stampo il messaggio: "Hai vinto! La somma del tuo numero " + user + " e quello del tuo avversario " + cpu + " è PARI!"
    - altrimenti se sum % 2 != 0 && se choice.toLowerCase() == "dispari"
        se si, stampo il messaggio: "Hai vinto! La somma del tuo numero " + user + " e quello del tuo avversario " + cpu + " è DISPARI!"
    - altrimenti stampo il messaggio: "Mi dispiace, hai perso... La somma dei due numeri è " + sum

- dichiaro e inizializzo una variabile "userChoice" in cui assegno la scelta dell'utente
- dichiaro e inizializzo una variabile "userNum" in cui assegno il numero scelto dall'utente
- dichiaro e inizializzo una variabile "cpuNum" in cui assegno la funzione randomNum()

- Infine richiamo la funzione playOddsAndEvens(userNum, cpuNum)

Bonus:

- effettuo un controllo per verificare che il numero inserito dall'utente sia compreso tra 1 e 5