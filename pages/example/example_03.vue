<template>
  <p>{{ counter + counter2 }}</p>
  <button @click="counter++">Add 1</button>
  <button @click="onClick">Add 2</button>
  <button @click="onClick2">Add 3</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      counter2: 0,
    };
  },
  watch: {
    counter2: () => {
      console.log('watch');
    },
  },
  setup() {
    let counter = 0; //ref(0);

    const onClick = (evt: Event) => {
      evt.preventDefault();
      // counter.value++;
      counter++;
    };

    return {
      counter,
      onClick,
    };
  },
  methods: {
    onClick2(evt: Event) {
      evt.preventDefault();
      this.counter2++;
    },
  },
};
</script>

<style lang="scss" scoped></style>
