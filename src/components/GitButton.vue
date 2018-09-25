<template>
      <div class="git-button">
      <div class="bt-left">
        <img :src="img" style="margin-right: 3px;">
        {{word}}
      </div>
      <div class="bt-right">
        {{count}}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    word: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.git-button {
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 5px;
  font-weight: bold;
}
.bt-left {
  padding: 5px;
  border: 1px solid grey;
  background-color: #eff3f6;
  border-right: 0px;
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
}
.bt-right {
  padding: 5px;
  border: 1px solid grey;
  border-radius: 0 5px 5px 0;
}
</style>
