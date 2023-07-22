<template>
  <div>
    <HeaderElem />
    <v-card>
      <v-card-title>
        GitHub Link
      </v-card-title>
      <v-card-text>
        <a :href="link" target="_blank" style="color: black">{{ link }}</a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HeaderElem from '../components/Header'
import { axios_request } from '../../api/story'
import { isAuth } from '../../utils'

export default {
  name: 'SourcePage',
  components: {
    HeaderElem,
  },
  data() {
    return {
      link: ''
    }
  },
  beforeMount() {
    if (!isAuth()) this.$router.push({ path: '/auth-or-reg' })
  },
  async mounted() {
    this.link = await this.getSourceLink();
  },
  methods: {
    async getSourceLink() {
      try {
        const { data } = await axios_request.get('/private/source', {
          headers: {
            token: localStorage.getItem('kidsAppToken')
          }
        });
        return data.link;
      } catch (err) {
        // todo
      }
    },
    isAuth,
  }

};
</script>