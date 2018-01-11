<template>
  <table>
    <thead>
      <tr>
        <th v-for="(name, index) in columnNames" v-bind:key="index" v-on:click="setFilterKey(index)">{{name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedRows" v-bind:key="row.id">
        <td v-for="(value, index) in row.cells" v-bind:key="index">{{value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DataGrid',
  props: {
    columnNames: Array,
    rows: Array,
    filterKey: Number
  },
  methods: {
    setFilterKey: function (key) { this.$emit('changeFilterKey', key) }
  },
  computed: {
    sortedRows: function () {
      return this.rows.sort((a, b) => a.cells[this.filterKey].localeCompare(b.cells[this.filterKey]))
    }
  }
}
</script>

<style>

</style>
