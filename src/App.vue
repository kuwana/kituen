<template>
  <div id="app">
    <mt-header fixed title="kituen">
      <mt-button icon="back" slot="left">back</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div>本日吸った本数: 5本</div>
    <mt-button size="large">吸った</mt-button>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        ホーム
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        カレンダー
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        統計
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        設定
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
/*
- タップした時の黒ずみ除去
- 長押しでメニュー開かない
- テキスト選択付加
- スクロール不可 に
*/
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
