module.exports ={
  presets:[
    //'./my-babel-preset.js',
    ['@babel/preset-env',{
      targets: {
        chrome: '79',
        ie: '11',
      },
      useBuiltIns: 'usage', // 폴리필 사용 방법 지정
      corejs: {
        version: 2,
      }
    }]
  ]
  // plugins: [
  //   '@babel/plugin-transform-block-scoping',
  //   '@babel/plugin-transform-arrow-functions',
  //   '@babel/plugin-transform-strict-mode',
  // ]
}