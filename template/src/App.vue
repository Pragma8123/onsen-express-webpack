<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="center">
      {{ name }}
    </div>
    <div class="right">
      <v-ons-toolbar-button>
        <v-ons-icon icon="ion-navicon, material: md-menu" />
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>
  <p style="text-align: center">
    <v-ons-button
      @click="$ons.notification.alert(message)"
    >
      Click me!
    </v-ons-button>
  </p>
</v-ons-page>
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
