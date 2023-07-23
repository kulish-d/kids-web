<template>
  <div>
    <HeaderElem />
    <div style="padding: 60px;" v-if="video">
      <v-card style="padding: 20px;">
        <v-card-title>
          FlexBox Guide
        </v-card-title>
        <div style="display: flex; justify-content: space-around;">
          <video width="600" controls :src="video"></video>
          <div style="align-self: center; width: 300px;">
            <v-card-subtitle>
              Rate this guide
            </v-card-subtitle>
            <v-rating v-model="review.mark" :readonly="isRated" half-increments color="black">
            </v-rating>
            <v-text-field placeholder="comment" v-model="review.comment" :disabled="isRated">
            </v-text-field>
            <v-btn v-if="!isRated" v-show="isValidComment" v-on:click="sendReview">Send</v-btn>
          </div>
        </div>
      </v-card>
    </div>
    <v-progress-circular v-else color="green" indeterminate :size="80" :width="10">
    </v-progress-circular>
  </div>
</template>

<script>
import HeaderElem from '../components/Header'
import { axios_request, BASE_URL } from '../../api/story'
import { isAuth } from '../../utils'

export default {
  name: 'GuidePage',
  components: {
    HeaderElem,
  },
  data() {
    return {
      video: '',
      review: {
        mark: 3,
        comment: '',
      },
      isRated: false,
    }
  },
  beforeMount() {
    if (!isAuth()) this.$router.push({ path: '/auth-or-reg' })
  },
  async mounted() {
    this.video = await this.getSourceLink();
    this.video = `${BASE_URL}/${this.video}`;
    const review = await this.getReview();
    if (review.mark) {
      this.isRated = true;
      this.review.mark = Number(review.mark);
      this.review.comment = review.comment;
    }
  },
  methods: {
    async getSourceLink() {
      try {
        const { data } = await axios_request.get('/private/guide', {
          headers: {
            token: localStorage.getItem('kidsAppToken')
          }
        });
        return data.video;
      } catch (err) {
        // todo
      }
    },
    async getReview() {
      try {
        const { data } = await axios_request.get('/private/review', {
          headers: {
            token: localStorage.getItem('kidsAppToken')
          }
        });
        return data;
      } catch (err) {
        // todo
      }
    },
    async sendReview() {
      try {
        const { data } = await axios_request.post('/private/review/new', {
          mark: this.review.mark,
          comment: this.review.comment.trim(),
        }, {
          headers: {
            token: localStorage.getItem('kidsAppToken')
          },
        });
        this.isRated = true;
        this.review.mark = Number(data.mark);
        this.review.comment = data.comment;
      } catch (err) {
        // todo
      }
    },
    isAuth,
  },
  computed: {
    isValidComment() {
      return this.review.comment.trim().length > 0 && this.review.comment.trim().length < 100;
    }
  }
};
</script>