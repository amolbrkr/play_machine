<template>
  <md-card class="md-primary" md-theme="black-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">ERROR!</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        {{ err }}
      </md-card-content>
    </md-card>
</template>

<script>
export default {
    name: 'app-error',
    props: ['err']
}
</script>
