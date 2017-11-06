<template>
  <b-card class="text-center" title="ERROR!" text-variant="light" bg-variant="dark">
      <p class="card-text">
          {{ err }}
      </p>
  </b-card>
</template>

<script>
export default {
    name: 'app-error',
    props: ['err']
}
</script>


