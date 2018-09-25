<template>
  <div style="display: flex; height: fit-content;">
    <img :src="image" alt="" width="40" height="40">
    <GitButton img="" :count="stars" word="Star"/>
    <GitButton img="" :count="forks" word="Fork"/>
  </div>
</template>


<script>
import Axios from "axios"
import GitButton from "./GitButton.vue"
// import forked from './icon/repo-forked.svg'
// import star from './icon/star.svg'
export default {
  props: {
    repo: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      image: "",
      stars: 0,
      forks: 0,
      // star,
      // forked
    }
  },
  created () {
    Axios.get('https://api.github.com/repos/'+this.repo).then(res => {
      this.image = res.data.owner.avatar_url
      this.stars = res.data.stargazers_count
      this.forks = res.data.forks_count
    })
  },
  components: {
    GitButton
  }
}
</script>
