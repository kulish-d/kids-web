var fs = require('fs');
var path_to_reviews = 'reviews.json';

const OK = 200;
const CREATED = 201;
const UNAUTHORIZED = 401;


module.exports = {
  getSource(req, res) {
    if (req.headers['token']) {
      res.status(OK).json({
        link: 'https://github.com/kulish-d/kids-web'
      })
    } else res.status(UNAUTHORIZED)
  },
  getGuide(req, res) {
    if (req.headers['token']) {
      res.status(OK).json({
        video: 'vds/guide.mp4'
      })
    } else res.status(UNAUTHORIZED)
  },
  getUserReview(req, res) {
    const token = Number(req.headers['token']);
    if (token) {
      const all_reviews = JSON.parse(fs.readFileSync(path_to_reviews, 'utf-8'));
      const user_review = all_reviews.find((rev) => rev.id === token);
      res.status(OK).json({
        mark: null ?? user_review?.mark,
        comment: null ?? user_review?.comment,
      })
    } else res.status(UNAUTHORIZED)
  },
  sendUserReview(req, res) {
    const token = Number(req.headers['token']);
    if (token) {
      let all_reviews = JSON.parse(fs.readFileSync(path_to_reviews, 'utf-8'));
      if (all_reviews.find((rev) => rev.id === token)) {
        res.status(BAD_REQ);
        return;
      }
      const user_review = {
        id: token,
        mark: req.body.mark,
        comment: req.body.comment,
      };
      all_reviews.push(user_review);
      fs.writeFileSync(path_to_reviews, JSON.stringify(all_reviews));
      res.status(CREATED).json({
        mark: user_review.mark,
        comment: user_review.comment,
      })
    } else res.status(UNAUTHORIZED)
  },
}