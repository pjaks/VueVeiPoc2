<template>
  <div>
    {{ getData().title }}
  </div>
</template>

<script>
  export default {
    name: 'AboutComponent',
    methods: {
      getData() {
        return {
          title: 'Dit is About!',
        };
      },
    },
  };
</script>
