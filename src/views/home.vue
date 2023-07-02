<template>
  <main
    v-if="!isActive"
    class="sm:w-full sm:p-0 md:flex md:flex-row-reverse md:items-center md:w-[65%] bg-white md:p-5 rounded-3xl"
  >
    <section class="sm:hidden md:w-1/2 md:block">
      <img class="p-0 m-0 w-full" src="../assets/desktop.svg" alt="" />
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
        >
          <span class="flex justify-between">
            Email address
            <p
              v-if="!isValid"
              class="text-red-500"
              :class="{ 'text-text-error': !isValid }"
            >
              Invalid email address
            </p>
          </span>
          <input
            type="text"
            :class="{
              'border-error': !isValid,
              'placeholder-text-error': !isValid,
              'bg-back-error': !isValid,
              'border-grey': isValid,
            }"
            id="email"
            v-model="email"
            placeholder="email@company.com"
            class="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <button-component
          text="Subscribe to monthly newsletter"
          @click="toActive"
        ></button-component>
      </section>
    </section>
  </main>
  <main v-else class="w-full h-full md:w-1/3 md:h-[55%] flex flex-col justify-end md:justify-start rounded-3xl bg-white">
    <section class="sm:h-3/4 md:h-full flex flex-col justify-between p-5">
      <div class="gap-4">
        <img src="../assets/icon-success.svg" alt="" />
        <div class="flex flex-col gap-5 mt-4">
          <div class="text-[50px] font-bold leading-none text-dark-slate-grey">
            Thanks for subscribing!
          </div>
          <span class="text-lg text-dark-slate-grey">
            A confirmation email has been sent to {{ email }}. Please open it
            and click the button inside to confirm your subscription
          </span>
        </div>
      </div>
      <button-component @click="this.isActive = false" text="Dismiss message"></button-component>
    </section>
  </main>
</template>
<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import ListComponent from "../components/ListComponent.vue";
export default {
  components: { ListComponent, ButtonComponent },
  name: "home",
  data() {
    return {
      isActive: false,
      email: "",
      isValid: true,
    };
  },
  methods: {
    isEmailValid() {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      this.isValid = emailRegex.test(this.email);
      return this.isValid;
    },
    toActive() {
      if (this.isEmailValid()) {
        this.isActive = true;
      }
    },
  },
};
</script>
<style></style>
