<template>
  <div class="container">
    <h2>Choose a Queue!</h2>
    <div class="queueList">
      <queue-info  v-for="(queue, index) in queues" v-bind:key="index"
        v-bind:name="queue.name"
        v-bind:count="queue.count"
        v-bind:id="queue.id"
        v-on:selected="selectQueue"
        />
    </div>
  </div>
</template>

<script>
import QueueInfo from './QueueInfo'

export default {
  name: 'QueueList',
  props: {
    queues: Array
  },
  methods: {
    selectQueue: function (id) { this.$emit('selectQueue', id) }
  },
  components: {
    QueueInfo
  }
}
</script>

<style>
h2 {
  margin-top: 0;
}
.container {
  width: 100%;
  height: 100%;
}
.queueList {
  border: 2px solid rgb(88, 88, 88);
  padding: 20px; 
  margin: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
