<template>
  <div class="container-fluid bg-dark sticky-top border-light border-start p-1">
    <div class="row">
      <div class="col-12">
        <span v-if="admin">Hi, {{ admin.name }}!</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../../AppState'

export default {
  setup () {
    return {
      admin: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped></style>
