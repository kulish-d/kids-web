const OK = 200;

module.exports = {
  getStory(req, res) {
    res.status(OK).json({
      story: 'В первую очередь, программирование - это свобода действий...'
    })
  },
  getInfoAboutMe(req, res) {
    res.status(OK).json({
      photo: 'img/photo.png',
      description: 'это я...'
    })
  }
}