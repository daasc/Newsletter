<template>
  <div class="flex items-center">
    <div
      class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center"
    >
      <img src="../assets/icon-success.svg" alt="Check Image" class="w-8 h-8" />
    </div>
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "ListComponent",
  props: {
    text: {
      type: String,
      default: 'Product discovery and building what matters'
    }
  }
};
</script>
