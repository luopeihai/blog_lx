const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withAntdLess = require('next-plugin-antd-less')
const withImages = require('next-images')

module.exports = withBundleAnalyzer(
  withImages(
    withAntdLess({
      modifyVars: { '@primary-color': '#000' }, // optional
      lessVarsFilePath: './css/variables.less', // optional
      lessVarsFilePathAppendToEndOfContent: false, // optional
      // optional https://github.com/webpack-contrib/css-loader#object
      cssLoaderOptions: {
        // ...
        mode: 'local',
        localIdentName: '[path][name]__[local]--[hash:base64:5]', // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
        exportLocalsConvention: 'camelCase',
        exportOnlyLocals: false,
        // ...
        getLocalIdent: (context, localIdentName, localName, options) => {
          return 'whatever_random_class_name'
        },
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'img/[name].[ext]',
              },
            },
          ],
        })

        return config
      },
      images: {
        domains: ['localhost', '*.vatesdesigner.com'],
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    })
  )
)
