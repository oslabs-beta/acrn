<p align="center">
  <img alt="acrn-logo" src="/docs/assets/logo.png" width="150">
</p>
<h1 align="center">acrn-rn</h1>
<p align="center">
  An accessibility first component library and development environment for React Native.<br/>
</p>

---

![build-badge][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-welcome-badge]][prs-welcome]

## Features

- Customizable accessibility presets for indiviual components, as well as containers designed to provide standalone accessible experiences.
- Works on both iOS and Android
- Sandbox Expo based Storybook environment for developers to build and test components
- Preconfigured tools to create and package your own component library

## Try it Out

- `git clone` this respository and `yarn install`
- Run `yarn storybook` to launch the Storybook server
- Run `yarn web`, `yarn ios`, or `yarn android` to launch the Storybook app in Expo and begin building or testing components

## Using the Components

- Simply `npm install acrn-rn` in your React Native project and import any of the components or containers listed in `node_modules/acrn-rn/src/index.tsx`

## Building and Demoing Your Own Components

- Create a folder for your component in the `src` directory
- To view your components in Storybook, create a `stories.tsx` file for your component in `/storybook/stories/` and import it in `/storybook/stories/index.js`
- If you plan on importing your components into other projects, create an entry for your component in `/src/index.tsx`. You can then use `yarn prepare` to build your `src` directory for CommonJS, ES modules, and Typescript, configuring the `"react-native-builder-bob"` field in your `package.json` as needed

## Testing Your Components with Jest

- create a `__tests__` subdirectory in the directory containing your component and place a `test.tsx` file inside
- simply run `yarn test` or `yarn test <your-test-file>` to execute the tests in your `__tests__` directories

## Configuring Your Expo App

- Adjust any fields in `app.json` to configure your expo app as needed.
- Keep in mind that `"entryPoint"` must be specified in order to prevent Expo's default behavior, which attempts to launch from the `"main"` field in your `package.json`
  - The default entrypoint provided by `expo-init` is `./node_modules/expo/AppEntry.js`, which will attempt to look for an `App.tsx` file in the root directory of your project

<!--Badge and Redirect URLs-->

[build-badge]: https://img.shields.io/circleci/project/github/callstack/react-native-paper/main.svg?style=flat-square
[build]: https://img.shields.io/badge/build-passing-success
[version-badge]: https://img.shields.io/npm/v/acrn-rn
[package]: https://www.npmjs.com/package/acrn-rn
[license-badge]: https://img.shields.io/npm/l/react-native-paper.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[prs-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome]: http://makeapullrequest.com
