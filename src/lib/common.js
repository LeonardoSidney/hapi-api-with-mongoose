const utils = {}

utils.sleep = async time => {
  await (() => new Promise(
    resolve => setTimeout(resolve, time)
  ))();
}

module.exports = {
  utils
}
