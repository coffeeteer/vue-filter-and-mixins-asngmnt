export const countMixin = {
  data: function() {
    return {
      testThree: "Supercalifragilisticexpialidocious"
    };
  },
  computed: {
    countLongWord() {
      return this.testThree + " (" + this.testThree.length + ")";
    }
  },
  created() {
    console.log("Mixin is created");
  }
};
