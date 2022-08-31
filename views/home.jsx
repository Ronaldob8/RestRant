const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/photo-1483921020237-2ff51e8e4b22.avif" 
                    alt="mountains filled with snow" />
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@erol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erol Ahmed</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
              </div>
              <a href='/places'>
                <button className='btn-primary'>Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
