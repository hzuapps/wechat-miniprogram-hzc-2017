function getLocalTime(nS) {     
    return new Date(parseInt(nS)/1000).toLocaleString();
}     
module.exports = {
  getLocalTime: getLocalTime
}
