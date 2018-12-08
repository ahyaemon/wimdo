# wimdo - product
ページ生成のほう。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

## templateの作成
wimdo-templateで作成したmain.jsを、src/template.tsに手動で反映させる必要がある。

その際、テキストエディタ上で「\」を「\\\\」に置換する。

（プログラムでやろうとしたけど、tsファイル内に貼り付けて文字列化した時点でエスケープ文字として識別されてしまう）
