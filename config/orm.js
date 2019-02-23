const connection = require('../config/connection.js');

function printQuestionMarks(numOf){
  let tempArray = [];
  for (let i = 0; i < numOf; i++){
    tempArray.push('?')
  }
  return tempArray.toString();
}

function objToSql(obj){
  let tempArray = [];
  for (let key in obj) {
    tempArray.push(key + '=' + obj[key]);
  }
  return tempArray.toString();
}

const orm = {
	all: function(tableInput, cb) {
		let queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			cb(result);
		});
	},

	create: function(table, cols, vals, cb) {
	  let queryString = 'INSERT INTO ' + table + ' (' + cols.toString() +') ' + 'VALUES (' + printQuestionMarks(vals.length) + ') ';
		console.log(queryString)
		connection.query(queryString, vals, function(err, result){
			cb(result);
		});
	},

	update: function(table, objColVals, condition, cb) {
		let queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;
		console.log(queryString);
		connection.query(queryString, function(err, result){
			cb(result);
		});
	}
};

module.exports = orm;