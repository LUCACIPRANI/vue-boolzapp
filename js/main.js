// configurazione vue
Vue.config.devtools = true;

const app = new Vue({
  el: "#root",
  data: {
    user: {
      name: "Luca Ciprani",
      avatar: "_8",
    },
    activeChat: 0,
    newMessage: "",
    inputSearch: "",
    found: "",
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            // date: "10/01/2020 15:30:55",
            date: "15:30",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            // date: "10/01/2020 15:50:00",
            date: "15:51",
            message: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            // date: "10/01/2020 16:15:22",
            date: "16:15",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "+34 7766444263",
        avatar: "_8",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30",
            message: "Bonjour ca va ? Je suis fabien 😄",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message:
              "Oui, ça va bien se passer, dites-moi d'abord, comment est Henry ?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Henry est très fatigué, mais il va bien..",
            status: "sent",
          },
        ],
      },
      {
        name: "Alberto",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "18/03/2020 20:30:00",
            message: "Hola! Que tal?",
            status: "received",
          },
          {
            date: "20/03/2020 20:37:55",
            message: "todo bien! gracias y tu? vamos a salir por la noche?",
            status: "sent",
          },
          {
            date: "20/03/2020 20:55:00",
            message:
              "Me gustaria mucho, la verdad, pero hoy no puedo, tengo que estudiar por el examen de mañaña 🙃",
            status: "received",
          },
        ],
      },
      {
        name: "+343392227744",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Frank",
        avatar: "_4",
        visible: true,
        messages: [
          {
            // date: "10/01/2020 15:30:55",
            date: "15:30",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            // date: "10/01/2020 15:50:00",
            date: "15:51",
            message: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            // date: "10/01/2020 16:15:22",
            date: "16:15",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_io",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Jenny",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "09/06/2020 12:30:55",
            message: "Let's take a beer tonight🍺",
            status: "sent",
          },
          {
            date: "09/06/2020 12:50:32",
            message:
              "Yes sure! what about 6.30 in front of the metro Station ?",
            status: "received",
          },
          {
            date: "09/06/2020 13:11:01",
            message: "Great!! See you later 😃",
            status: "sent",
          },
        ],
      },
    ],
  },
  methods: {
    setActiveChat(index) {
      this.activeChat = index;
    },
    typeMessage() {
      if (this.newMessage != "") {
        let thisContact = this.contacts[this.activeChat];
        // salvo la variabile per assicurare lo stesso valore
        // nel caso cambio chat
        thisContact.messages.push({
          date: dayjs().format("hh:mm"),
          message: this.newMessage,
          status: "sent",
        });
        this.receiveAnswer(thisContact);
        // richiamo la funzione 'ReceiveAnswer' con
        // il 'thisContact' che ho salvato precedentemente
        // nell'index, per non salvarlo di nuovo nella funzione in basso
        this.newMessage = "";
      }
    },
    enterMessage() {
      document.addEventListener("keydown", function (e) {
        if (e.key === "enter") {
          typeMessage();
        }
      });
    },
    receiveAnswer(thisContact) {
      setTimeout(() => {
        thisContact.messages.push({
          date: dayjs().format("hh:mm"),
          message: "ok!",
          status: "received",
        });
      }, 2000);
    },
    getLastMessageDate() {
      let currentContact = this.contacts[this.activeChat];
      return currentContact.messages[currentContact.messages.length - 1].date;
    },
    getLastViewMessage(index) {
      let currentChatMessage = this.contacts[index];
      return currentChatMessage.messages[currentChatMessage.messages.length - 1]
        .message;
    },
    getLastMessageChatDate(index) {
      let currentDateContact = this.contacts[index];
      return currentDateContact.messages[currentDateContact.messages.length - 1]
        .date;
    },
    // milestone 4

    searchName() {
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.inputSearch.toLowerCase());
      });
    },

    // milestone 5
    deleteChat(index) {
      this.contacts.splice(index, 1);
    },
    toggleShowInfo(index) {},
    deleteMessage(index) {
      this.messages.splice(index, 1);
    },
    getDay() {},

    // scrollToBottom(){
    //   const messages = document.querySelector('my-message');
    //   const received = document.querySelector('received-message');
    //   messages.scrollTop = received.offsetTop - 10;
    // },

    // scrollToBottom() {
    //   setInterval(scrollToBottom, 1000);
    // },
  },
});
