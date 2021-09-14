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
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
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
        name: "Samuele",
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
        this.contacts[this.activeChat].messages.push({
          date: dayjs().format("MM-DD-YYYY hh:mm:ss"),
          message: this.newMessage,
          status: "sent",
        });
        this.enterMessage();
        this.receiveAnswer();
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
    receiveAnswer() {
      setTimeout(() => {
        this.contacts[this.activeChat].messages.push({
          date: dayjs().format("MM-DD-YYYY hh:mm:ss"),
          message: "ok!",
          status: "received",
        });
      }, 1000);
    },
    lastView() {
      // funzione filter + length - 1
      this.messages(message.length - 1);
      
    },
    lastMessage() {
      const lastmessage = contacts[activeChat].messages.message;
      return lastmessage;
    },
    // milestone 4
    userResearch() {
      let results = [];
      const inputElem = document.querySelector(".input");
      let toSearch = inputElem.value;

      for (let i = 0; i < this.name.length; i++) {
        for (key in this.name[i]) {
          if (this.name[i][key].indexOf(toSearch) != 0) {
            results.push(this.name[i]);
          }
          console.log(results);
        }
      }
    },
    searchName() {
      document.addEventListener("keydown", function (e) {
        if (e.key === "enter") {
          userResearch();
        }
      });
    },
    // milestone 5
    deleteFriendChat(index) {
      this.contacts.splice(index, 1);
    },
    deleteMessage(index) {
      this.messages.splice(index, 1);
    },
    showTime() {},
    lastSideMessage() {},
  },
});
