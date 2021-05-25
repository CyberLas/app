const   a= require('./wsp/wsp')
const wsp1 = a.wspconection()
const wsp2 = a.wspmessage()
module.exports = { wsp1, wsp2 }