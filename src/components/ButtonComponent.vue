<template>
  <button
    class="bg-dark-slate-grey w-full hover:bg-blue-600 text-white font-bold py-4 px-4 rounded mb-4"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: '',
    }
  }
};
</script>
