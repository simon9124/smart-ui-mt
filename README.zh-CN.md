### 1.参考项目

- [gitee vue-element-admin](https://gitee.com/mirrors/vue-element-admin)
- [文档](https://panjiachen.github.io/vue-element-admin-site/#/zh-cn/README)
- [mint-ui](http://mint-ui.github.io/#!/zh-cn)

### 2.目录结构

```shell
├── build                    // 构建相关
├── config                   // 配置相关
├── src                      // 源代码
│ ├── api                    // 所有请求
│ ├── assets                 // 主题 字体等静态资源
│ ├── components             // 全局公用组件
│ ├── directive              // 全局指令
│ ├── filtres                // 全局filter
│ ├── mock                   // mock数据
│ ├── router                 // 路由
│ ├── store                  // 全局store管理
│ ├── styles                 // 全局样式
│ ├── utils                  // 全局公用方法
│ ├── view                   // view
│ ├── App.vue                // 入口页面
│ └── main.js                // 入口 加载组件 初始化等
├── static                   // 第三方不打包资源
│ ├── jquery
│ └── Tinymce                // 富文本
├── .babelrc                 // babel-loader 配置
├── eslintrc.js              // eslint 配置项
├── .gitignore               // git 忽略项
├── favicon.ico              // favicon图标
├── index.html               // html模板
└── package.json             // package.json
```

- views 和 api 两个模块一一对应，方便维护
- components 放置的都是全局公用的一些组件，如上传组件，富文本等等。一些页面级的组件建议还是放在各自 views 文件下，方便管理

### 3.项目启动（直接拉取后）

- npm install
- npm run dev
- npm run build
- npm run build --report

### 4.项目依赖（若从 0 搭建）

- npm install mint-ui -S
- npm install element-ui -S
- npm install vuex -S
- npm install --save nprogress
- npm install js-cookie -S
- npm i mint-ui -S
- npm install axios -S
- npm i promise.prototype.finally -S
- npm install node-sass --save-dev npm install sass-loader --save-dev（style 用）
- npm install sass-loader --save npm install node-sass --save（路由用）
- npm install --save-dev cross-env

### 5.技术难点

- 路由懒加载 [参考文档](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html#新方案)

```
使用babel 的 babel-plugin-dynamic-import-node：
1.在package.json中增加BABEL_ENV
  "scripts": {
    "dev": "cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    ...
  },
2.在.babelrc中加入babel-plugin-dynamic-import-node，让只有在development模式生效
  "env": {
    "development": {
      "plugins": ["dynamic-import-node"]
    }
  }
```

- 路由守卫
- 登录后 cookie 存储 token
- 登录后，获取用户信息

- 登录后，存储用户信息（详见文件：src/store/modules/user.js）
  .getUserInfo ().then(response => {commit('mutation1', data1)...})
  .const user = { state: { data1,data2...}, mutations: { mutation1, mutation2...}}

- 登录后，在任意页面获取用户信息（import store from ...）
  store.state.user

### 6.Vue 组件

https://cn.vuejs.org/v2/guide/components.html
组件开发步骤：

- git 服务器上建立组件项目
- 通过 vue cli 建立项目
  $ vue init webpack vue-upload
- 参考标准覆盖项目的
  .gitignore
  .editorconfig
  .eslintignore
  .eslintrc.js

- 按需修改 package.json
  .version 版本号不能和上 1 个版本相同
  .必须添加 main，否则无法被引用

- 在 src 目录下添加 index.js
  .单组件参考 ctsi-vue-tinymce
  .组件库参考 ctsi-vue-dialog
  .复杂组件库参考 element-ui

- 发布到 npm
  npm publish

### 7.npm 注册

npm 新用户，需先注册方能发布组件

- 添加用户
  .npm adduser
- 注册后登录
  .npm login

未保存 npm 账户（如新电脑）没有发布权限，同样需先登录 npm 账号保存用户名和密码:

- 用户登录
  .npm login user
- 后依次输入用户名、密码（密码在界面不显示，正常输入即可）、邮箱
  .公共账号 & 密码 & 邮箱：ctsidr ctsidr123# ctsidr@qq.com
