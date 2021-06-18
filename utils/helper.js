// time and condition checks

var moment = require('moment');

module.exports = {
    format_time: (timeStamp) => moment(timeStamp, 'ddd MMM DD YYYY HH:mm:ss GMT Z').fromNow(),
    ifequals: function(arg1, arg2, options) {
        return (arg1 >= arg2) ? options.fn(this) : options.inverse(this);
    },
    format_date: (date) => date.toLocaleString() 
}

