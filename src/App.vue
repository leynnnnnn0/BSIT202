<script setup>
import OpeningMessage from './components/OpeningMessage.vue';
import ChatPage from './pages/ChatPage.vue';
import {ref} from 'vue'
const display = ref(false);
const displayChat = ref(true);
const handleClick = () => {
    display.value = false
    displayChat.value = true;
}

</script>

<template> 
    <OpeningMessage @handleClick="handleClick" v-show="display"/>
    <ChatPage v-show="displayChat"/>
</template>

<style scoped></style>
