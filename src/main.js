import Vue from "vue";
import App from "./App.vue";

Vue.filter("countWord", function(word) {
  return word + " (" + word.length + ")";
});

new Vue({
  el: "#app",
  render: h => h(App)
});
