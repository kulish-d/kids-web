<template>
  <v-toolbar color="green">
    <div id="navigation">
      <router-link to="/" :style="{
        color: $route.path === '/' ? 'black' : 'white',
        margin: '30px',
      }">
        Главная
      </router-link>
      <router-link to="/about" :style="{
        color: $route.path === '/about' ? 'black' : 'white',
        margin: '30px',
      }">
        Обо мне
      </router-link>
      <span v-if="isAuthorizedUser">
        <router-link to="/source" :style="{
          color: $route.path === '/source' ? 'black' : 'white',
          margin: '30px',
        }">
          Исходники
        </router-link>
        <router-link to="/css-guide" :style="{
          color: $route.path === '/css-guide' ? 'black' : 'white',
          margin: '30px',
        }">
          Гайд по css
        </router-link>
      </span>
    </div>
    <v-spacer>
    </v-spacer>
    <v-chip v-if="!isAuthorizedUser" :style="{
      'background-color': $route.path === '/auth-or-reg' ? 'black' : 'white',
    }">
      <router-link to="/auth-or-reg" :style="{
        'color': $route.path === '/auth-or-reg' ? 'white' : 'black',
      }">
        Вход/Регистрация
      </router-link>
    </v-chip>
    <v-chip v-else v-on:click="() => { exit(); isAuthorizedUser = false }">
      Выйти
    </v-chip>
  </v-toolbar>
</template>

<script>
import { isAuth, exit } from '../../utils'

export default {
  name: 'HeaderElem',
  methods: {
    isAuth, exit
  },
  data() {
    return {
      isAuthorizedUser: false,
    }
  },
  mounted() {
    this.isAuthorizedUser = isAuth();
  },
};

</script>

<style>
.v-application a {
  color: white;
  text-decoration: none;
}

#navigaton a {
  margin: 50px;
}
</style>