const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/zakaria-zayane-0uAVsDcyD0M-unsplash (1).jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/marissa-grootes-u2Lp8tXIcjw-unsplash.jpg'
      }]
      
    res.render('places/index', { places })
  })
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

module.exports = router
