<template>
  <div>
    <data-grid 
      v-bind:column-names="this.$store.state.currentQueue.columnNames"
      v-bind:rows="this.$store.state.currentQueue.rows"
      v-bind:filter-key="this.$store.state.currentQueue.filterKey"
      v-on:changeFilterKey="changeFilterKey"
      />
  </div>
  
</template>

<script>
import DataGrid from '@/components/DataGrid'

export default {
  components: {
    DataGrid
  },
  methods: {
    changeFilterKey: function (key) {
      this.$store.commit('changeFilterKey', key)
    }
  }
}
</script>

<style>

</style>
