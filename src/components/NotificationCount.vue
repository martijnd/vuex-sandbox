<template>
  <div>
    <label>
      Vul je naam in
      <input
        v-model="name"
        @keydown.enter="showresult = true"
      />
    </label>
    <h1 v-show="showresult">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: "loading",
    name: "",
    showresult: false
  }),

  computed: {
    messageCount() {
      return this.$store.state.messages;
    }
  },

  methods: {
    increment() {
      this.$store.state.messages++;
    },
    decrement() {
      this.$store.state.messages--;
    }
  },

  mounted() {}
};
</script>
