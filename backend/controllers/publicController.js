const OK = 200;

module.exports = {
  getStory(req, res) {
    res.status(OK).json({
      story: 'В первую очередь, программирование - это свобода действий...'
    })
  },
  getInfoAboutMe(req, res) {
    res.status(OK).json({
      photos: ['img/school_photo.JPG', 'img/last_selfie.jpeg'],
      description: `слева - счастливый я,
       получивший золотую медаль на выпускном и жаждущий получить всё от этой жизни.
       Справа - тоже я, на фоне маяка в Мержаново, уставший, но в целом по-прежнему любящий эту жизнь.`
    })
  }
}