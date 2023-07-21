<template>
  <div>
    <HeaderElem />
    <v-card>
      <v-card-title>
        My story
      </v-card-title>
      <v-card-text>
        {{ story }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HeaderElem from '../components/Header'
import { axios_request } from '../../api/story'

export default {
  name: 'HomePage',
  components: {
    HeaderElem,
  },
  data() {
    return {
      story: ''
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