<template>
  <div id="footer">
    <vs-button
      @click="openAlert('success')"
      color="success"
      type="filled"
      size="small"
      class="mt-4"
      accept-text="{text}"
      >Como bater um papo comigo?</vs-button
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    colorAlert: 'success',
    titleAlert: 'Contato',
    activeAlert: false,
    active: false
  }),
  methods: {
    openAlert(color) {
      this.colorAlert = color || this.getColorRandom()
      this.$vs.dialog({
        color: this.colorAlert,
        title: 'Fale comigo',
        text: 'Todas as minhas informações de contato estão escondidas no site. Para acessa-lás, clique em falar comigo ou em cima da minha foto. Use qual preferir!',
        accept: this.acceptAlert,
      })
    },
    acceptAlert() {
      this.$vs.notify({
        color: this.colorAlert,
        title: 'Entendeu tudo mesmo?',
        text: 'Corre lá então!'
      })
    },
    getColorRandom() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
    },
  }
}
</script>

<style>
</style>