<template>
  <main class="sm:w-full sm:p-0 md:flex md:flex-row-reverse md:items-center md:w-[65%] bg-white p-5 rounded-3xl">
    <section class="sm:hidden md:w-1/2 md:block">
      <img class=" p-0 m-0 w-full" src="../assets/desktop.svg" alt="" />
    </section>
    <section class="sm:w-full md:hidden">
      <img class="p-0 m-0 w-full" src="../assets/mobile.svg" alt="" />
    </section>
    <section class="md:w-1/2">
      <section class="mt-8 pl-6 flex flex-col gap-3">
        <h1 class="text-[44px] text-dark-slate-grey">Stay updated!</h1>
        <p class="text-charcoal-grey text-[18px]">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
      </section>
      <section class="sm:pl-2">
        <list-component
          text="Product discovery and building what matters"
        ></list-component>
        <list-component
          text="Measuring to ensure updates are a success"
        ></list-component>
        <list-component text="And much more!"></list-component>
      </section>
      <section class="mt-8 pl-6 pr-2 flex flex-col gap-4">
        <label
          for="email"
          class="flex flex-col text-dark-slate-grey font-bold mb-2"
          >Email address
          <input
            type="email"
            id="email"
            placeholder="email@company.com"
            class="border border-grey rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <button
          class="bg-dark-slate-grey w-full hover:bg-blue-600 text-white font-bold py-4 px-4 rounded mb-4"
        >
          Subscribe to monthly newsletter
        </button>
      </section>
    </section>
  </main>
</template>
<script>
import ListComponent from "../components/ListComponent.vue";
export default {
  components: { ListComponent },
  name: "home",
};
</script>
<style></style>
