<template>
  <div class="container bg-white mt-4">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <div></div>

        <h1

          class="text-5xl font-1   text-center text-dark md:mt-5"
        >
          Welcome Beautiful Soul
        </h1>
        <br />

        <h2

          class="text-4xl font-2 underline text-lightPink darken-20 mb-4"
        >
          Our Core Belief
        </h2>
      </div>
      <div class="col-md-8 text-center">
        <p  class="text-xl px-md-5">
          Is that we all want to be at peace with who we truly are, and that at
          every moment is an opportunity where we can be authentic with
          ourselves in everyday life.
        </p>

        <p  class="text-xl px-md-5">
          <b> SamadhiYogaIdaho </b> is a holistic approach to wellness using
          pranayama, asana, journaling, and meditation practices to increase our
          knowledge of self, life, mobility, and to help every person recognize
          their worthiness, beauty, and uniqueness.
        </p>
        <p class="text-xl" >
          Escape with us and learn how to see yourself without judgment
        </p>
        <RetreatButton />
        <p class="mt-3">
          <a

            href="#newsletter"
            class="btn bg-warning selectable px-4  "
          >
            Begin Your Journey</a
          >
        </p>
      </div>
    </div>
    <hr class="my-5" />

    <div class=" flex-row flex">
      <CTACard />
    </div>
  </div>
</template>

<script>
import CTACard from "../CTACard.vue";
import { onMounted } from "vue";
import RetreatButton from "../RetreatButton.vue"
export default {
  setup() {
    onMounted(() => {

    });
    return {};
  },
  components: { CTACard },
};
</script>

<style lang="scss" scoped></style>
