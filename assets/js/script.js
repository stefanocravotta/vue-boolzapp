

const app = new Vue({
  el: '#app',

  data: {
    personalUser: {
        name: 'Stefano',
        avatar: '_io',
    },
    users: [
      {
          name: 'Michele',
          avatar: '_1',
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
          avatar: '_2',
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
          avatar: '_3',
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
          avatar: '_4',
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
          avatar: '_5',
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
          avatar: '_6',
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
          avatar: '_7',
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
          avatar: '_8',
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
  ],
  activeUser: 0,
  activeMessage: 0,
  inputMessage : "",
  inputSearch : "",
  showMenu : false,
  },

  methods: {
    
    addNewMessage(){
        
        const nuovoMessaggio = {
           date: this.nowDate(),
           message: this.inputMessage,
           status: 'sent'
        };
    
        this.users[this.activeUser].messages.push(nuovoMessaggio);
        this.inputMessage = "";
        
        setTimeout(() => {
            const rispostaMessaggio = {
                date: this.nowDate(),
                message: 'OK !!!',
                status: 'received'
             };
             this.users[this.activeUser].messages.push(rispostaMessaggio);
        }, 1000)
    },
    
    filteredList() {
        return this.users.filter(user => {
          return user.name.toLowerCase().includes(this.inputSearch.toLowerCase())
        })
    },

    removeMessage(category, index){

        this.users[this.activeUser].messages.splice(index,1) 
        console.log(this.users.messages);
    },

    toggleMenu(){
        this.showMenu = !this.showMenu
    },

    nowDate(){
        const now = new Date();
        console.log(now);
        let fullYear = now.getFullYear();
        let month = now.getMonth();
        let day = now.getDay();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        let controlloMese = "";
        let controlloGiorno = "";
        let controlloOra = "";
        let controlloMinuti = "";
        let controlloSecondi = "";

        if(month + 1 < 10){
            controlloMese = '0' + (month + 1);
        }else{
            controlloMese = month + 1
        }

        if(day + 1 < 10){
            controlloGiorno = '0' + (day + 1);
        }else{
            controlloGiorno = day + 1
        }

        if(hour < 10){
            controlloOra = '0' + (hour);
        }else{
            controlloOra = hour
        }
        
        if(minute < 10){
            controlloMinuti = '0' + (minute);
        }else{
            controlloMinuti = minute
        }

        if(second < 10){
            controlloSecondi = '0' + (second);
        }else{
            controlloSecondi = second
        }

        console.log(controlloMese);
        let global = `${controlloGiorno}/${controlloMese}/${fullYear} ${controlloOra}:${controlloMinuti}:${controlloSecondi}`;
        console.log(fullYear);
        return global
    },

    lastMessage(user){
        if(user.messages.length - 1 >= 0){
           return user.messages[user.messages.length - 1].message; 
        }else{
            return "Non ci sono messaggi nella conversazione"
        }
        
    },

    lastMessageDate(user){
        if(user.messages.length - 1 >= 0){
            return user.messages[user.messages.length - 1].date;
         }else{
             return ""
         }
        
    }
  }
}) 