<template>
  <div
    id="index"
    class="container flex items-center h-screen max-w-screen-xl m-auto lg:block p-container"
  >
    <Hello />
    <Content />
  </div>
</template>



<script>
import Hello from '~/components/Hello'
import Content from '~/components/Content'
export default {
  name: 'Index',
  components: { Hello, Content }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html,
body {
  @apply h-screen;
  @apply antialiased;
  @apply bg-darken;
}

a {
  @apply no-underline;
}

ul {
  @apply flex;
}
</style>