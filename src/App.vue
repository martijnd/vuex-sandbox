<template>
  <div id="app">
    <h1>{{ messagecount }}</h1>
    <div v-for="message in $store.state.messages" :key="message">
      {{ message }}
    </div>
    <div class="ui input">
      <input type="text" v-model="newMessage" />
    </div>
    <button @click="addMessage" class="ui primary button">
      Click
    </button>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
export default {
  name: "app",
  data: function() {
    return {
      newMessage: ""
    };
  },
  computed: {
    messagecount() {
      return this.$store.state.messages.length;
    }
  },
  components: {},
  methods: {
    addMessage() {
      if (this.newMessage.length > 0) {
        this.$store.commit("addMessage", this.newMessage);
        this.newMessage = "";
      }
    }
  }
};
</script>
