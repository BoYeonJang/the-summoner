<template>
  <div class="flex justify-center mt-40">
    <!-- <canvas
      id="canvas"
      class="bg-gray-900 w-6/12 h-1/3 shadow-3xl rounded-xl p-5"
    ></canvas> -->
    <div
      class="bg-gray-900 w-6/12 shadow-3xl rounded-xl p-5"
      style="height: 30rem"
    >
      <div id="output" class="">{{ content }}</div>
      <div id="input" class="">
        <ChevronRightIcon class="h-6 w-6 text-blue-500" />
        <input class="w-full bg-transparent" />
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/solid"; // 입력창 화살표

export default {
  name: "Terminal",
  components: {
    ChevronRightIcon,
  },
  props: {
    // msg: String,
  },
  data() {
    return {};
  },
  methods: {
    start() {
      print("ㅇㄹㅁㄴㅇㄹ");
    },
  },
};
</script>
