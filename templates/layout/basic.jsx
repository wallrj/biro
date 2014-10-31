/**
 * @jsx h
 */

var h = require('mercury').h
var Rows = require('./rows')

module.exports = function(fields){
	var rows = Rows(fields)
	return <form className="biroForm form-basic" name="biroForm" role="form">{rows}</form>
}
