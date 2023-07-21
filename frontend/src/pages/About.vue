<template>
  <div>
    <HeaderElem />
    <v-img :src="aboutMeData.photo" width="25%">
    </v-img>
  </div>
</template>

<script>
import HeaderElem from '../components/Header'
import { axios_request, BASE_URL } from '../../api/story'

export default {
  name: 'AboutPage',
  components: {
    HeaderElem,
  },
  data() {
    return {
      aboutMeData: {
        photo: '',
        description: '',
      }
    }
  },
  async mounted() {
    this.aboutMeData = await this.getStory();
    this.aboutMeData.photo = `${BASE_URL}/${this.aboutMeData.photo}`
  },
  methods: {
    async getStory() {
      try {
        const { data } = await axios_request.get('/public/about-me');
        return data;
      } catch (err) {
        // todo
      }
    }
  },
}
</script>