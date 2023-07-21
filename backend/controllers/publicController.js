const OK = 200;

module.exports = {
  getStory(req, res) {
    res.status(OK).json({
      story: 'В первую очередь, программирование - это свобода действий...'
    })
  }
}