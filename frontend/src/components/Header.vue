<template>
  <v-toolbar color="green">
    <div>
      <router-link to="/" :style="{ color: $route.path === '/' ? 'black' : 'white' }">
        Главная
      </router-link>
      <router-link to="/about" :style="{ color: $route.path === '/about' ? 'black' : 'white' }">
        Обо мне
      </router-link>
    </div>
  </v-toolbar>
</template>

<script>

export default {
  name: 'HeaderElem',
};

</script>

<style>
.v-application a {
  color: white;
  text-decoration: none;
}
</style>