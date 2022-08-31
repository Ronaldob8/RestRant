const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/istockphoto-1305291912-170667a.jpg" alt="bird is free" />
              </div>
              <div>
                <p>
                    Photo from iStock
                </p>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
