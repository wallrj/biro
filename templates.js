var fs = require('fs')

var templates = {
  layout:{
    basic:fs.readFileSync(__dirname + '/templates/layout/basic.html', 'utf8'),
    horizontal:fs.readFileSync(__dirname + '/templates/layout/horizontal.html', 'utf8'),
    inline:fs.readFileSync(__dirname + '/templates/layout/inline.html', 'utf8')
  },
  field:{
  	text:fs.readFileSync(__dirname + '/templates/field/text.html', 'utf8')
  }
}

module.exports = templates