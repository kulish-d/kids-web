<template>
  <div>
    <HeaderElem />
    <v-sheet width="500" class="mx-auto">
      <v-form>
        <v-text-field v-model="uname" label="username"></v-text-field>
        <v-text-field v-model="pwd" label="password"></v-text-field>
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
          <v-btn v-on:click="auth">Вход</v-btn>
          <v-btn v-on:click="register">Регистрация</v-btn>
        </div>
        <v-alert type="warning" outlined>{{ warning }}</v-alert>
        <v-alert type="error" outlined v-if="error">{{ error }}</v-alert>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import HeaderElem from '../components/Header'
import { axios_request } from '../../api/story'

export default {
  name: 'AuthOrRegisterPage',
  components: {
    HeaderElem,
  },
  data() {
    return {
      uname: '',
      pwd: '',
      warning: 'после входа вы будете перенаправлены на главную',
      error: '',
    }
  },
  methods: {
    async auth() {
      if (this.isValidPassword && this.isValidUserName) {
        try {
          const { data } = await axios_request.post('/auth/', {
            username: this.uname,
            password: this.pwd,
          });
          localStorage.setItem('kidsAppToken', data.token);
          this.$router.push('/')
        } catch (err) {
          this.error = err.response.data.error;
        }
      } else this.warning = 'Пароль не может содержать меньше 6-и символов'
    },
    async register() {
      if (this.isValidPassword && this.isValidUserName) {
        try {
          await axios_request.post('/auth/new', {
            username: this.uname.trim(),
            password: this.pwd.trim(),
          });
          const { data } = await axios_request.post('/auth/', {
            username: this.uname.trim(),
            password: this.pwd.trim(),
          });
          localStorage.setItem('kidsAppToken', data.token);
          this.$router.push('/')
        } catch (err) {
          this.error = err.response.data.error;
        }
      } else this.warning = 'Пароль должен должен содержать минимум 6 символов, а никнейм - хотя бы 1 :)'
    },
  },
  computed: {
    isValidPassword() {
      return this.pwd.trim().length >= 6
    },
    isValidUserName() {
      return this.pwd.trim().length >= 1
    },
  },

};
</script>