# ove-lang
哦语言: 一门图样图森破的编程语言


## 使用
在 Node 环境下使用（支持 Node V6 及以上）：

``` text
npm install -g ove-lang
```

从终端读取语句并执行：

``` text
$ ove-lang '(+ 1 2)'
$ 3
```


## API

``` js
ove (text, hasPreprocess = true)
```

输入源码 `text`，返回语言执行结果。当 `hasPreprocess` 为 `false` 时，不进行替换中文关键字的预处理，将 `text` 作为 Scheme 源码执行。


## 开发
安装依赖：

``` text
npm install
```

运行开发模式，将监听源文件变更：

``` text
npm run dev
```

运行生产模式，将压缩打包文件：

``` text
npm run prod
```

测试

``` text
node test
```


## Changelog
* `0.2.0`
    * 实现预处理器
    * 实现词法分析器
    * 支持浮点数
    * 添加测试用例
    * 适配 Node 与浏览器环境
* `0.1.0` 实现 scheme 核心子集
