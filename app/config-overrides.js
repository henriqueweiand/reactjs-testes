const {
  override,
  fixBabelImports,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    }),
);
