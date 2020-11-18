module.exports.controller = (app) => {
  // get users page
  app.get('/', (req, res) => {
    res.render('index', { title: 'Express MVC' })
  })
}
