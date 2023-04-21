<template>
  <div>
    <div class="container position-relative py-5">
      <div

        :delay="300"
        class="floating-image-1 d-none d-md-block"
      >
        <PersonComponent />
      </div>
      <div class="row">
        <div
          class="md:w-2/3 team-section-title flex md:block  flex-col  sm:items-center sm:justify-center "
        >
          <h1

            :delay="300"
            class="text-4xl font-1 underline text-center text-md-start text-dark"
          >
            Katie Alverson
          </h1>
          <h2

            :delay="1200"
            class="display-6 font-2 underline text-lightPink darken-20 text-center text-md-start"
          >
            Experienced
          </h2>

          <h2

            :delay="900"
            class="display-6 font-2 underline text-lightPink darken-20 text-center text-md-start me-md-2"
          >
            Qualified
          </h2>

          <h2

            :delay="300"
            class="display-6 font-2 underline text-lightPink darken-20 text-center text-md-start"
          >
            Passionate
          </h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class=" flex   justify-center">
        <div class="md:w-1/2 flex justify-center items-center ">
          <div

            :delay="300"
            class="card framed border-0"
          >
            <div class="image-box">
              <img
                src="../../assets/img/KatiePortrait.png"
                alt="Katie Alverson"
                class="img-fluid elevation-6 rounded"
              />
            </div>
          </div>
        </div>
        <div class="md:w-1/2">
          <p

            :delay="300"
            class="text-start  font-2 text-xl"
          >
            Hi there! I'm Katie, and I absolutely love to get to share the
            beauty and peace of yoga with others. I believe that yoga has the
            power to transform lives and I am dedicated to sharing the benefits
            of this ancient practice with as many people as possible. Whether
            you are a beginner or an experienced yogi, I am here to support you
            on your journey towards physical, mental, and spiritual well-being.
            I am constantly learning and growing as a teacher, and I am always
            looking for new ways to inspire and empower my students. I teach in
            Baptiste Power Vinyasa, Vinyasa Yin , and Restorative Yoga. I love
            incorporating elements of both dynamic flow and restorative
            relaxation into my classes, and I believe that this balance is
            essential for a well-rounded yoga practice and mental clarity. I am
            so grateful to be able to share my love of yoga with others, and I
            hope to see you on the mat soon!
          </p>


        </div>
      </div>
      <div class="  flex justify-center md:justify-end  ">
        <router-link

          :delay="300"
          :to="{ name: 'About' }"
          class="my-3"
        >
          <button class="btn btn-dark font-2 fs-3 text-lg ">
            Learn more about Katie
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PersonComponent from "../MiscComponents/PersonComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { PersonComponent },
};
</script>

<style lang="scss" scoped>
.floating-image-1 {
  position: absolute;
  left: 58%;
  top: -45%;
  width: 400px;
  height: 400px;
  z-index: 2;
  /* always scale the image to the appropriate size of your screen */
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    left: 14%;
    top: -40%;
    width: 300px;
    height: 300px;
  }
}
</style>
