<template>
    <div>
        <h1> {{ msg }} </h1>
        <p>
            Présentation de l'animal
        </p>
        <img classe="img_présentation" alt="moi" src="../assets/logo.png" />
    </div>
</template>
<script>
export default {
  name: "Presentation",
  props: {
    msg: String
  },
  methods: {
    getDescription() {
      let objAnimal = localStorage.getItem(this.$route.params.id);
      let objJson = JSON.parse(objAnimal);
      return objJson.description
    }
  }
};
</script>
<style scoped>

.img_presentation {
    width: 50%;
    height: 50%;
    align-content: center;
}
</style>