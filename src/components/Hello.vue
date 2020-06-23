<template>
  <div
    id="hello"
    class="container h-screen max-w-screen-lg m-auto lg:h-auto p-container"
  >
    <vs-sidebar
      parent="body"
      default-index="1"
      color="success"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div>
        <div>
          <vs-sidebar-item>
            <figure>
              <img
                width="75"
                class=""
                src="../assets/oficialAvatar.png"
                alt="Avatar"
              />
            </figure>
          </vs-sidebar-item>
          <h2 class="ml-2 text-xl font-bold text-vue">Willian Silva</h2>
          <p class="mt-2 ml-2 text-sm text-support">
            Desenvolvedor Front End
          </p>
        </div>

        <div class="flex flex-col mt-16">
          <vs-sidebar-item index="1" icon="computer">
            <a href="https://blogwilliansilva.now.sh/" target="_blank">Blog</a>
          </vs-sidebar-item>

          <vs-sidebar-item index="2" icon="mail">
            <a href="mailto:will.devfrontend@gmail.com" target="_blank"
              >Email</a
            >
          </vs-sidebar-item>

          <vs-sidebar-item index="3" icon="code">
            <a href="https://github.com/Wiriyamu" target="_blank">Github</a>
          </vs-sidebar-item>

          <vs-sidebar-item index="5" icon="camera_alt">
            <a href="https://www.instagram.com/sr.willian_/" target="_blank"
              >Instagram</a
            >
          </vs-sidebar-item>

          <vs-sidebar-item index="4" icon="person">
            <a href="https://www.linkedin.com/in/wiriyamu/" target="_blank"
              >Linkedin</a
            >
          </vs-sidebar-item>
        </div>
      </div>
    </vs-sidebar>

    <nav class="flex items-center sm:justify-between">
      <a @click="active = !active" href="#">
        <img
          class="my-8"
          src="../assets/oficialAvatar.png"
          alt="Avatar"
          width="75"
        />
      </a>

      <div>
        <vs-button
          class="ml-48"
          @click="
            $vs.notify({
              title: 'Aviso',
              text: 'Beba muita água e ajeite essa postura.',
              color: 'danger',
              title: 'Não se esqueça...'
            })
          "
          color="danger"
          type="flat"
          icon="info"
          >Aviso!</vs-button
        >
      </div>
    </nav>

    <h1 class="max-w-lg text-6xl font-bold text-white sm:text-4xl">
      Hello, I’m Willian Silva.
    </h1>
    <div class="w-1/2 sm:w-4/5">
      <vs-progress indeterminate color="primary" />
    </div>
    <p class="max-w-lg mt-4 text-sm text-support">
      Sou desenvolvedor Front-end, entusiasta por novas experiências e fã de
      todo ecossistema JavaScript. Venho dando atenção especial à comunidade do
      <strong
        ><a
          class="text-vue hover:text-hover"
          href="https://vuejs.org/"
          target="_blank"
          >Vue</a
        ></strong
      >
      e suas ferramentas adjacentes
      <strong
        ><a
          class="text-vue hover:text-hover"
          href="https://nuxtjs.org/"
          target="_blank"
          >Nuxt</a
        ></strong
      >,
      <strong
        ><a
          class="text-vue hover:text-hover"
          href="https://gridsome.org/"
          target="_blank"
          >Gridsome</a
        ></strong
      >,
      <strong
        ><a
          class="text-vue hover:text-hover"
          href="https://vuepress.vuejs.org/"
          target="_blank"
          >Vuepress</a
        ></strong
      >
      e fazendo essa junção com um css utility-first,
      <strong
        ><a
          class="text-vue hover:text-hover"
          href="https://tailwindcss.com/"
          target="_blank"
          >Tailwind</a
        ></strong
      >.
    </p>

    <div>
      <p class="mt-8 text-sm text-support">
        Sinta-se a vontade para
        <a
          @click="active = !active"
          class="text-vue hover:text-hover font-"
          href="#"
          >falar comigo</a
        >!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupActivo: false,
      active: false,
      notExpand: false,
      reduce: true
    }
  }
}
</script>

<style>
</style>