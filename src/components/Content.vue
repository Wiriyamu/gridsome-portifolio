<template>
  <div
    id="content"
    class="container h-screen max-w-screen-lg m-auto lg:h-auto p-container"
  >
    <h1 class="mt-8 text-xl font-bold text-white md:text-lg">
      Para saber mais informações sobre mim, é só continuar explorando aqui
      abaixo!
    </h1>
    <About />
    <Skills />
    <Projects />
    <Contact />

    <p class="mt-8 text-xs text-support md:text-center">
      Design and Code by Willian Silva.
    </p>
    <p class="mt-2 mb-8 text-xs text-support md:text-center">
      Make with Gridsome, Vuesax and Tailwind
    </p>
  </div>
</template>

<script>
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
export default {
  components: { About, Skills, Projects, Contact }
}
</script>

<style>
</style>