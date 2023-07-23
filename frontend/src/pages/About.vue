<template>
  <div>
    <HeaderElem />
    <div style="padding: 60px;">
      <v-card style="display: flex; padding: 90px;">
        <v-img :src="aboutMeData.photos[0]" width="20%" max-height="600px">
        </v-img>
        <v-card-text style="align-self: center; width: 20%">{{ aboutMeData.description }}</v-card-text>
        <v-img :src="aboutMeData.photos[1]" width="20%" max-height="600px">
        </v-img>
      </v-card>
    </div>
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
        photos: [],
        description: '',
      }
    }
  },
  async mounted() {
    this.aboutMeData = await this.getStory();
    this.aboutMeData.photos = this.aboutMeData.photos.map((item) => `${BASE_URL}/${item}`);
  },
  methods: {
    async getStory() {
      try {
        const { data } = await axios_request.get('/public/about-me');
        console.log(data);
        return data;
      } catch (err) {
        // todo
      }
    }
  },
}
</script>