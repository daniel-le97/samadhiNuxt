<template>
  <div>
    <section id="Hero-Section">
      <div class=" container ">
        <div class="">
          <div class=" p-0">
            <div class="relative px-0">
              <div class="tsparticles">
                <!-- <ParticleComponent /> -->
              </div>
              <div
                class="hero-image flex justify-center items-center   flex-column "
              >
                <div style="margin-top: 80px" class="text-shadow container">
                  <TransitionSlide group mode="in-out" :delay="100">
                    <h1
                      class="  text-8xl  text-light font-1 text-center"
                    >
                      SAMADHI YOGA IDAHO
                    </h1>
                    <h5
                      class="text-4xl font-2 text-light uppercase text-center"
                    >
                      <br>
                      Become aware of your capacity to create <br>
                      to be authentic in every day life <br>
                      to transform & to love
                    </h5>
                  </TransitionSlide>
                </div>
              </div>
              <GentleWave />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Call-To-Action-Section" class="my-5 flex justify-center">
      <CallToAction />
    </section>

    <section id="About-Katie-Section" class="bg-pink about-section flex justify-center">
      <AboutSection />
    </section>

    <!-- <section>
      <ScheduleSection />
    </section>



    <section id="Retreat-Section">
      <RetreatAndEvents />
    </section>

    <section id="Testimonials-Section " class="mb-5 bg-pink py-5">
      <TestimonialSection />
    </section>

    <section>
      <div class="container">
        <InstagramFeed />
      </div>
    </section> -->
  </div>
  <!-- <LoadingComponent /> -->
</template>

<script setup>
import ParticleComponent from "~/components/MiscComponents/ParticleComponent.vue";
import  "~/assets/scss/main.scss";
import GentleWave from "~/components/MiscComponents/GentleWave.vue";
import CallToAction from "~/components/HomePage/CallToAction.vue";
import AboutSection from "~/components/HomePage/AboutSection.vue";
import ScheduleSection from "~/components/HomePage/ScheduleSection.vue";

</script>

<style scoped lang="scss">
.about-section {
  margin-top: 10rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
}
.hero-image {

  height: 100vh;
  width: 100vw;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
  //when screen is 768px OR LESS
   @media only screen and (max-width: 768px){
 background-attachment: scroll;

  }
}

//when screen is 768px OR LESS
@media only screen and (max-width: 768px) {
  .logo-image {
    width: 75%;
  }

  .team-section-title {
    margin-top: 140px;
  }
}


</style>
