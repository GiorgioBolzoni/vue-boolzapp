# vue-boolzapp

## Milestone 1

Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

## Milestone 2

Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

## Milestone 3

Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

## Milestone 4

Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

## Milestone 5 - opzionale

Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

### Consigli utili:

- Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
- I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
- Per gestire le date, può essere utile la libreria Luxon
- La struttura dell’array dei contatti potrebbe avere questa forma:

contacts: [
{
name: 'Michele',
avatar: './img/avatar_1.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Hai portato a spasso il cane?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Ricordati di stendere i panni',
status: 'sent'
},
{
date: '10/01/2020 16:15:22',
message: 'Tutto fatto!',
status: 'received'
}
],
},
{
name: 'Fabio',
avatar: './img/avatar_2.png',
visible: true,
messages: [
{
date: '20/03/2020 16:30:00',
message: 'Ciao come stai?',
status: 'sent'
},
{
date: '20/03/2020 16:30:55',
message: 'Bene grazie! Stasera ci vediamo?',
status: 'received'
},
{
date: '20/03/2020 16:35:00',
message: 'Mi piacerebbe ma devo andare a fare la spesa.',
status: 'sent'
}
],
},
{
name: 'Samuele',
avatar: './img/avatar_3.png',
visible: true,
messages: [
{
date: '28/03/2020 10:10:40',
message: 'La Marianna va in campagna',
status: 'received'
},
{
date: '28/03/2020 10:20:10',
message: 'Sicuro di non aver sbagliato chat?',
status: 'sent'
},
{
date: '28/03/2020 16:15:22',
message: 'Ah scusa!',
status: 'received'
}
],
},
{
name: 'Alessandro B.',
avatar: './img/avatar_4.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Lo sai che ha aperto una nuova pizzeria?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Si, ma preferirei andare al cinema',
status: 'received'
}
],
},
{
name: 'Alessandro L.',
avatar: './img/avatar_5.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Ricordati di chiamare la nonna',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Va bene, stasera la sento',
status: 'received'
}
],
},
{
name: 'Claudia',
avatar: './img/avatar_6.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Ciao Claudia, hai novità?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Non ancora',
status: 'received'
},
{
date: '10/01/2020 15:51:00',
message: 'Nessuna nuova, buona nuova',
status: 'sent'
}
],
},
{
name: 'Federico',
avatar: './img/avatar_7.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Fai gli auguri a Martina che è il suo compleanno!',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Grazie per avermelo ricordato, le scrivo subito!',
status: 'received'
}
],
},
{
name: 'Davide',
avatar: './img/avatar_8.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Ciao, andiamo a mangiare la pizza stasera?',
status: 'received'
},
{
date: '10/01/2020 15:50:00',
message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
status: 'sent'
},
{
date: '10/01/2020 15:51:00',
message: 'OK!!',
status: 'received'
}
],
}
]

## Boolzapp Bonus !!!!

### Possibili bonus :

#### Funzionalità

- evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

- A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono.

- B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano
- predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
- visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto
- inserire l'orario corretto nei messaggi
- sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
- dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
- dare la possibilità all'utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto
- fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione

#### Grafica

- visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
- aggiungere una splash page visibile per 1s all'apertura dell'app

- A) rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto.
- B) aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti

- aggiungere un'icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
- aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
