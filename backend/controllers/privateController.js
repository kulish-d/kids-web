const OK = 200;
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
    res.status(OK).json({
      video: 'vds/'
    })
  }
}