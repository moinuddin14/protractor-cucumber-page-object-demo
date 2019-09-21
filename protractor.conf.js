exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  multiCapabilities: [
    {
      browserName: 'safari',
      shardTestFiles: true,
      maxInstances: 2,
      unexpectedAlertBehaviour: 'accept'
    }
  ],

  specs: ['features/*.feature'],
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  }
};
