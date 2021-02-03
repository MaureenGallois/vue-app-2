<template>
  <div class="about">
    <Presentation :msg= "getName()" />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation.vue";

export default {
  name: "Animal",
  data() {
    return {
    }
  },
  components: {
    Presentation
  },
  methods: {
    getName() {
      let objAnimal = localStorage.getItem(this.$route.params.id);
      let objJson = JSON.parse(objAnimal);
      return objJson.nom
    }
  }
};
</script>