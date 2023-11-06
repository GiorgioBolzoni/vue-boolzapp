const dt = luxon.DateTime;

// Importa l'array con il nome corretto
import { contactList } from './data.js';

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contactList, // Utilizza il nome corretto 'contactList' invece di 'contact'
            activeContactIndex: 0,
            searchText: '',
            message: '',
            resp: 'ok',
            filterContact: '',
        };
    },
    methods: {
        selectContact(id) {
            const index = this.contacts.findIndex((contact) => contact.id === id);
            if (index !== -1) {
                this.activeContactIndex = index;
            }
        },
        getLastMessage(id) {
            const contact = this.contacts.find((contact) => contact.id === id);
            const len = contact.messages.length;
            if (len > 0) {
                return contact.messages[len - 1].message;
            } else {
                return 'Non ci sono messaggi';
            }
        },
        getLastAccess(id){
            const contact = this.contacts.find((contact) => contact.id === id);
            const len = contact.messages.length;
            if (len > 0) {
                return contact.messages[len - 1].date;
            } else {
                return 'Unknown';
            }
        },
        newMessage(){
            const newMsg = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: this.message,
                status: 'sent'
            };
            this.activeContact.messages.push(newMsg);
            this.message='';
            setTimeout(()=>{
                const newMsg = {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: this.resp,
                    status: 'received'
                };
                this.activeContact.messages.push(newMsg);
            }, 1000)
        },
        filterContacts() {
            // Filtra i contatti in base al testo di ricerca
            if (this.filterContact.trim() === '') {
                // Se il campo di ricerca è vuoto, mostra tutti i contatti
                this.contacts = contactList;
            } else {
                this.contacts = contactList.filter(contact => {
                    return contact.name.toLowerCase().includes(this.filterContact.toLowerCase());
                });
            }
        },
    },
    computed: {
        activeContact(){
            return this.contacts[this.activeContactIndex];
        },
        lastDate(){
            const len = contact.messages.length;
            if (len > 0) {
                return this.activeContact.messages[len - 1].date;
            } else {
                return 'Unknown';
            }
        }
    }
}).mount('#app');
