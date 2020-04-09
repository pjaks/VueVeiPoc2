<template>
  <div>
    {{ getData().title }}
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    methods: {
      getData() {
        return {
          title: 'Dit is Home!',
        };
      },
    },
  };
</script>
