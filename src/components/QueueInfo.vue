<template>
  <div class="infoBox">
    <h3 class="queue-info-name">{{name}}</h3>
    <a class="queue-info-open" v-on:click="selectMe" >Open</a>
    <p class="queue-info-count">{{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'QueueInfo',
  props: {
    name: String,
    id: String,
    count: Number
  },
  methods: {
    selectMe: function () { this.$emit('selected', this.id) }
  }
}
</script>

<style>
.infoBox {
  height: 50px;
  border: 2px solid rgb(88, 88, 88);
  padding: 5px; 
  margin: 10px;
}

.queue-info-name {
  margin: 0;
}

.queue-info-count {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  line-height: 25px;
  text-align: center;
  background: rgb(97, 134, 182); 
  margin: 0;
}

.queue-info-open {
  border: 1px solid rgb(113, 144, 184);
  background-color: rgb(219, 229, 243);
  padding: 2px; 
  float: right;
  text-decoration-line: none;
}

.queue-info-open:hover {
  background-color: rgb(250, 251, 252);
  cursor: pointer;
}

</style>
