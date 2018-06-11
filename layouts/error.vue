<template>
  <section class="container">
    <h2 class="subtitle">
      {{ error.statusCode }} | {{ error.message }} 
    </h2>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>