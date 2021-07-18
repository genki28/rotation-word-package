<template>
  <p class="rotation">{{ props.word }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WordType } from "../@types/componentPropTypes";

type Props = {
  word: WordType;
};

export default defineComponent({
  props: {
    word: {
      type: String,
      required: false,
      default: "HelloWorld",
    },
  },
  setup(props: Props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.rotation {
  display: inline-block;
  animation: rotation 3s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
