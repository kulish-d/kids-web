<template>
  <div>
    <HeaderElem />
    <v-sheet width="500" class="mx-auto">
      <v-form>
        <v-text-field v-model="uname" label="username"></v-text-field>
        <v-text-field v-model="pwd" label="password"></v-text-field>
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
          <v-btn>Вход</v-btn>
          <v-btn>Регистрация</v-btn>
        </div>
        <v-alert type="warning" outlined>Ошибка</v-alert>
        <v-alert type="error" outlined>Ошибка</v-alert>
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
    }
  },
  async mounted() {
    this.story = await this.getStory();
  },
  methods: {
    async getStory() {
      try {
        const { data } = await axios_request.get('/public/');
        return data.story;
      } catch (err) {
        // todo
      }
    }
  }

};
</script>