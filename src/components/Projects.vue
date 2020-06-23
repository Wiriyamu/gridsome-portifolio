<template>
  <div id="projects">
    <div class="centerx">
      <vs-button
        :color="colorx"
        @click="popupActivo5 = true"
        type="filled"
        size="small"
        >Uma espiadinha nos meu projetos?</vs-button
      >

      <vs-popup
        style="color:rgb(255,255,255)"
        :background-color-popup="colorx"
        title="Navegue usando os links abaixo! Eles irão te redirecionar para
        a página de cada projeto."
        :active.sync="popupActivo5"
      >
        <div class="flex flex-col items-center">
          <vs-button color="default" type="line" icon="open_in_new">
            <a href="https://vuestatebrasil.now.sh/" target="_blank"
              >Vue State Brasil</a
            >
          </vs-button>

          <vs-button
            class="ml-2"
            color="default"
            type="line"
            icon="open_in_new"
          >
            <a href="https://blogwilliansilva.now.sh/" target="_blank">Blog</a>
          </vs-button>

          <vs-button
            class="ml-2"
            color="default"
            type="line"
            icon="open_in_new"
          >
            <a href="https://vue-huddle.now.sh/" target="_blank">Huddle</a>
          </vs-button>
        </div>
      </vs-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      colorx: 'rgb(255, 130, 0)',
      popupActivo5: false
    }
  }
}
</script>

<style>
</style>