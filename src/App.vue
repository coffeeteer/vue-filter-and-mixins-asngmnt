<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ soonToBeReversed | reverseText }}</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ test | countWord}}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reverseIt }}</p>
        <p>{{ countWord }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>{{ countLongWord }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { countMixin } from "./countMixin.js";
export default {
  mixins: [countMixin],
  data() {
    return {
      soonToBeReversed: "This text will be reversed.",
      test: "Test",
      computedReverse: "This will also be reversed.",
      testTwo: "Onomatopoeia"
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseIt() {
      return this.computedReverse
        .split("")
        .reverse()
        .join("");
    },
    countWord() {
      return this.testTwo + " (" + this.testTwo.split("").length + ")";
    }
  }
};
</script>

<style>
</style>
