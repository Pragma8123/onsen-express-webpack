<template>
<div>
  <h1>{{ name }}</h1>
  <p>{{ description }}</p>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '{{ description }}',
    };
  },
};
</script>
