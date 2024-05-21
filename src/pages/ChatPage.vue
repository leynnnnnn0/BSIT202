<script setup>
import { onMounted, ref } from 'vue'
import db from '../db/firebaseConfig.js'
import {getDocs, collection, addDoc} from 'firebase/firestore'

// array of chats from the databse
const chatsList = ref([]);
const isSending = ref(false);
// Function to get all the chats from the database
const fetchChats = async () => {
  chatsList.value = [];
  let chatsCollection = await getDocs(collection(db, 'chats'))
  chatsCollection.forEach(chat => {
    chatsList.value.push(chat.data())
   }) 
   console.log(chatsList.value);
}
onMounted(fetchChats());

const myChat = ref({
  username: "unknown",
  chat: ""
});
// handling send button
const handleSubmit = async  () => {
  if(myChat.value.chat) {
    try {
      isSending.value = true;
      await addDoc(collection(db, 'chats'), myChat.value);
      myChat.value.chat = "";
      isSending.value = false;
      fetchChats();
    }catch(e) {
      console.log(e);
    }
  }
}
</script>

<template>
  <body class="chat-page-body FLEX-CENTER">
    <div class="chat-box PADDING-2 FLEX-COLUMN">
      <div class="logo-area FLEX-CENTER">
        <img src="/BSIT202LOGO.png" />
      </div>
      <p class="welcome">Welcome to chat</p>
      <div class="chats FLEX-COLUMN">
        <div class="userchat" v-for="(chat, index) in chatsList" :key="index">
          <p class="username">{{ chat.username }}</p>
          <p class="chat">{{ chat.chat }}</p>
        </div>
      </div>
      <form class="form-area FLEX-CENTER" @submit.prevent="handleSubmit">
        <input type="text" placeholder="chat" v-model="myChat.chat" />
        <button class="submit P-SMALL" type="submit" :disabled="isSending">{{isSending ? "Sending" : "Send"}}</button>
      </form>
    </div>
  </body>
</template>

<style scoped>
.chat-page-body {
  background: var(--yellow);
  padding: var(--padding-10);
}

.chat-box {
  background: var(--white);
  width: 100%;
  max-width: 700px;
  height: 700px;
  padding: var(--padding-2);
  border-radius: 20px;
}

.logo-area img {
  width: 50px;
  border-radius: 50px;
  align-self: center;
}

.user-chat {
  margin-top: 0.5rem;
  width: fit-content;
}

.chats {
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;
}

.chat {
  background: var(--blue);
  width: fit-content;
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  max-width: 70%;
  font-size: var(--xs-font);
}

.chat-y {
  align-self: flex-end;
  margin-top: 0.5rem;
}

.welcome {
  font-size: var(--s-font);
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.username {
  font-size: 10px;
}

.form-area {
  margin-top: 1rem;
  display: flex;
}

input {
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid var(--blue);
  width: 100%;
}

.submit {
  background: var(--blue);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: ease 0.5s;
}

.submit:hover {
  background: var(--yellow);
}
</style>
