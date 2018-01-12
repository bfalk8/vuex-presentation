<template>
  <div class="wrapper">
    <current-queue class="one" /> 
    <queue-list class="two"
      v-bind:queues="this.$store.state.queueList" v-on:selectQueue="selectQueue"
     />
  </div>
</template>
<script>
import api from '@/api/requests'
import CurrentQueue from '@/components/CurrentQueue'
import QueueList from '@/components/QueueList'

export default {
  name: 'MainPage',
  components: {
    CurrentQueue,
    QueueList
  },
  methods: {
    selectQueue: function (id) { this.$store.dispatch('selectNewQueue', id) }
  },
  mounted () {
    api.getQueueEntries(data => {
      this.$store.commit('updateMainQueue', data)
    }, this.$store.state.currentQueue.queueID)
    api.getQueues(data => {
      this.$store.commit('updateQueueList', data)
    })
  }
}
</script>
<style>
.main-queue {
  width: 75%;
}

.queue-selector {
  width: 24%;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.one {
  grid-column: 1 / 4;
  grid-row: 1;
}

.two { 
  grid-column: 4 / 4;
  grid-row: 1;
}

</style>


