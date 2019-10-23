# Demo of utf-8 struggles with typescript and protobuf

After cloning this, try to load `dist/` as an unpacked extension at
`chrome://extensions`. It will complain that `contentscript.js` is not utf-8
encoded.

This problem appears after adding a proto that is built and output as
typescript. `npm run build` should be sufficient to build yourself, with the
relevant code in `src/contentscript/`.

See [this issue](https://github.com/improbable-eng/ts-protoc-gen/issues/209) for
more information.


---

<h1 align="center">Welcome to Chrome Extension with React and Typescript Starter Pack 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/thmsgbrt/Chrome-Extension-with-React-and-Typescript-Starter-Pack#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/thmsgbrt/Chrome-Extension-with-React-and-Typescript-Starter-Pack/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/thmsgbrt/Chrome-Extension-with-React-and-Typescript-Starter-Pack/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier"  src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"  target="_blank"  />
  </a>
  <a href="https://twitter.com/Guibz16">
    <img alt="Twitter: Guibz16" src="https://img.shields.io/twitter/follow/Guibz16.svg?style=social" target="_blank" />
  </a>
</p>

> A starter pack to create Chrome Extensions using Typescript and React

### 🏠 [Homepage](https://github.com/thmsgbrt/Chrome-Extension-with-React-and-Typescript-Starter-Pack#readme)

## Tutorial 

- [Medium Publication](https://medium.com/@th.guibert/create-a-chrome-extension-using-react-and-typescript-50e94e14320c)

## Install

```sh
npm i && cd src/popup && npm i
```

## Usage

```sh
npm run watch
```

## Author

👤 **Guibert Thomas**

- Twitter: [@Guibz16](https://twitter.com/Guibz16)
- Github: [@thmsgbrt](https://github.com/thmsgbrt)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/thmsgbrt/Chrome-Extension-with-React-and-Typescript-Starter-Pack/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Guibert Thomas](https://github.com/thmsgbrt).<br />
This project is [ISC](https://github.com/thmsgbrt/Chrome-Extension-with-React-and-Typescript-Starter-Pack/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
