const dt = luxon.DateTime;
dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT);
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
            resp: 'ok'
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
        }
    },
    computed: {}
}).mount('#app');
