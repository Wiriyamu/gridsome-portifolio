<template>
  <div id="sobre">
    <!-- <h1 class="mt-8 text-xl font-bold text-vue hover:text-hover">#Sobre</h1> -->
    <template v-if="active">
      <p class="mt-4 leading-relaxed md:text-sm text-support">
        Sempre almeje voos mais altos.<br />
        <br />
        Esta pequena frase descreve, ainda que vagamente, o caminho que venho
        tentando trilhar nos últimos anos. Eu sempre pensei que seria um ótimo
        Arquiteto. A possibilidade de juntar algo esteticamente bonito aos
        sonhos das pessoas, era algo que me encantava. No entanto, pelos nuances
        dessa montanha-russa imprevisível que chamamos de vida, acabei me
        apaixonando por algo: <br />
        <br />
        Desenvolver inferfaces.
        <br />
        <br />
        O desenvolvimento front-end é uma delicinha. Quando estou codando, tenho
        a liberdade de criar, modificar, reorganizar e até mesmo recomeçar do
        zero, caso não goste de algo. Trabalhar com interfaces me obriga a
        pensar fora da caixa e de modo calmo, a cada novo desafio.
        Particularmente não me importo com isso, afinal esse processo é bem
        divertido!
        <br />
        <br />
        const trabalhoPerfeito = ['cafe', 'codigo', 'sonhos', 'paixão'];<br />
        <br />
        Atualmente, estou testando e explorando de tudo um pouco, vivendo um dia
        de cada vez.
      </p>
    </template>

    <vs-button
      class="mt-4"
      color="primary"
      @click="handleMessage()"
      type="filled"
      size="small"
      >{{ message }}</vs-button
    >
  </div>
</template>

<script>

export default {
  name: 'Sobre',
  data() {
    return {
      active: false,
      message: 'História desse serumaninho?'
    }
  },
  methods: {
    handleMessage() {
      this.active = !this.active
      if (!this.active) {
        this.message = 'História desse serumaninho?'
      } else if (this.active) {
        this.message = 'Esconder Texto'
      }
    }
  }
}
</script>

<style>
</style>