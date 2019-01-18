<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <b-modal
      id="modal"
      ref="modal"
      title="Hello World"
      :ok-only="true"
      style="text-align:left;"
    >
      Hello I'm a modal
      <br/>
      <br/>
      <ul>
        <li>list entry</li>
      </ul>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import bModal from 'bootstrap-vue/es/components/modal/modal';

@Component({
  components: {
    HelloWorld,
    bModal,
  },
})
export default class App extends Vue {

  /**
   * @override
   */
  mounted(){
    (this.$refs.modal as any).show();
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
