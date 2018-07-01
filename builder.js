const color = require('./models/colors.js')
const transition = require('./models/transition.js')
const font = require('./models/font.js')

module.exports = {
    start: "~128",

    end: "\r\r\r",

    setColor: function(c,txt) {
        return color[c] + txt
    },

    setTransition: function(t) {
        return transition[t]
    },

    setFont: function(f, txt) {
        return font[f] + txt;
    },

    setSpeed: function(s) {
        if (s < 0 || s > 9)
            throw("Speed Error between 1 and 8")
        return `\\Y${s}`
    },
    
    setPause: function(s) {
        if (s < 0 || s > 9)
            throw("Pause Error between 1 and 8")
        return `\\Z${s}`
    }
}