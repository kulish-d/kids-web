var fs = require('fs');
var path_to_users = 'users.json';

const OK = 200;
const CREATED = 201;
const BAD_REQ = 400;

module.exports = {
  register(req, res) {
    let all_users = JSON.parse(fs.readFileSync(path_to_users, 'utf-8'));
    if (all_users.find((user) => user.username === req.body.username)) {
      res.status(BAD_REQ).json({
        error: 'пользователь с таким никнеймом уже существует!'
      })
      return;
    }
    all_users.push({
      id: Date.now(),
      username: req.body.username,
      password: req.body.password,
    });
    fs.writeFileSync(path_to_users, JSON.stringify(all_users))
    res.status(CREATED).json({
      response: 'успешная регистрация!'
    })
  },

  auth(req, res) {
    let all_users = JSON.parse(fs.readFileSync(path_to_users, 'utf-8'));
    const user = all_users.find(
      (user) => user.username === req.body.username && user.password === req.body.password
    );
    if (!user) {
      res.status(BAD_REQ).json({
        error: 'совпадений не найдено!'
      })
      return;
    }
    res.status(OK).json({
      token: user.id
    })
  }
}