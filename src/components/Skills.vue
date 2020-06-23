<template>
  <div id="skills">
    <!-- <h1 class="mt-8 text-xl font-bold text-vue hover:text-hover">
      #Skills
    </h1> -->

    <vs-button
      class="my-4"
      @click="handleMessage()"
      color="danger"
      type="filled"
      size="small"
      >{{ message }}</vs-button
    >

    <template v-if="active">
      <div>
        <p class="text-xs uppercase text-support">Html5</p>
        <vs-progress :percent="90" color="warning">Html</vs-progress>
      </div>
      <div>
        <p class="text-xs uppercase text-support">Css3</p>
        <vs-progress :percent="85" color="primary">Css3</vs-progress>
      </div>
      <div>
        <p class="text-xs uppercase text-support">Sass</p>
        <vs-progress :percent="80" color="danger">danger</vs-progress>
      </div>
      <div>
        <p class="text-xs uppercase text-support">Tailwind</p>
        <vs-progress :percent="75" color="success">success</vs-progress>
      </div>
      <div>
        <p class="text-xs uppercase text-support">Javascript</p>
        <vs-progress :percent="70" color="dark">dark</vs-progress>
      </div>
      <div class="mb-2">
        <p class="text-xs uppercase text-support">Vue</p>
        <vs-progress :percent="80" color="success">success</vs-progress>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      active: false,
      message: 'Quer ver minhas skills?'
    }
  },
  methods: {
    handleMessage() {
      this.active = !this.active
      if (!this.active) {
        this.message = 'Quer ver minhas skills?'
      } else if (this.active) {
        this.message = 'Acho melhor escondermos isso!'
      }
    }
  }
}
</script>

<style>
</style>