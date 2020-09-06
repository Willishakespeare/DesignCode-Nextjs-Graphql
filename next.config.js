/* eslint-disable @typescript-eslint/no-var-requires */
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/icons'),
  webpack(config) {
    return config;
  },
  env: {
    //          Set ENV Variavbles
    MONGODB_URI:
      'mongodb+srv://Willishakespeare:skr13@cluster0-b0qwy.azure.mongodb.net/DesignCodeGraphQL?retryWrites=true&w=majority',
    DB_NAME: 'DesignCode',
    CLOUDINARY_URL: 'cloudinary://219364126864578:7wvgT7fcMfZR5EV03zSQqSnxhHs@design-code-mx',
    SENDGRID_API_KEY: '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',
    EMAIL_FROM: 'designcode@designcode.com.mx',
    WEB_URI: 'https://designcode.com.mx/api/graphql',
    USING_SECRETS: 'SkrDSCODE'
  }
});
