const path = require('path')

module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定している
    entry: {
        bundle: './src/index.ts'
    },
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    output: {
        path: path.join(__dirname, 'dist'), // "__dirname"はファイルが存在するディレクトリ
        filename: '[name].js' // [name]はentryで記述した名前（この設定ならbundle）
    },
    // import文でファイル拡張子を書かずに名前解決するための設定
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // webpack-dev-serverの公開フォルダ
        open: true // サーバー起動時にブラウザを開く
    },
    module: {
        rules: [
            {
                // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
                loader: "ts-loader",
                test: /\.ts$/
            }
        ]
    }
}
