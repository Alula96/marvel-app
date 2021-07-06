const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@public': 'public',
    '@common': 'src/common',
    '@components': 'src/components',
    '@contexts': 'src/contexts',
    '@features' : 'src/features',
    '@hooks' : 'src/hooks',
    '@routes' : 'src/routes',
    '@services' : 'src/services',
    '@styles' : 'src/styles',
    '@utils' : 'src/utils',
  })(config)

  return config
}