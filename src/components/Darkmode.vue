<template>
  <div class="flex justify-end items-center space-x-2">
    <span class="text-sm text-gray-800 dark:text-gray-500">Light</span>
    <div>
      <input type="checkbox" name="" id="toggle" class="hidden" />
      <label for="toggle" class="cursor-pointer">
        <div
          class="
            w-9
            h-5
            flex
            items-center
            bg-gray-300
            dark:bg-gray-600
            rounded-full
            p-1
          "
        >
          <div
            class="
              toggle-dot
              w-4
              h-4
              bg-white
              rounded-full
              shadow-md
              translate
              duration-300
              ease-in-out
            "
          ></div>
        </div>
      </label>
    </div>
    <span class="text-sm text-gray-400 dark:text-gray-100">Dark</span>
  </div>
</template>

<script>
export default {
  name: "Darkmode",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
