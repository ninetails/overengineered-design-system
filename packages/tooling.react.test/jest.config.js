module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': `${__dirname}/jest.preprocess.js`
  }
}
