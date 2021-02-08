<template>
  <div class="about">
    <Presentation :animal= "animal"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation.vue";

export default {
  name: "Animal",
  data() {
    return {
      animal: {}
    }
  },
  components: {
    Presentation
  },
  created() {
    this.getAnimal();
  },
  methods: {
    getAnimal() {
      let objAnimal = localStorage.getItem(this.$route.params.id);
      this.animal = JSON.parse(objAnimal);
    },
  }
};
</script>