const OK = 200;
const UNAUTHORIZED = 401;

module.exports = {
  getSource(req, res) {
    res.status(OK).json({
      link: 'https://github.com/kulish-d/kids-web'
    })
  },
  getGuide(req, res) {
    res.status(OK).json({
      video: 'vds/'
    })
  }
}