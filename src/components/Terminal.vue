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
      <div class="output">{{ content }}</div>
      <div class="input"><input /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
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
