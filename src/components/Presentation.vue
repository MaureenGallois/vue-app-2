<template>
    <div>
        <h1> {{ msg }} </h1>
        <p>
            Je me présente, je m'appelle Maureen.
            J'ai 22 ans, et actuellement en cours de vueJs :D
        </p>
        <img classe="img_présentation" alt="moi" src="../assets/logo.png" />
    </div>
</template>
<script>
export default {
  name: "Presentation",
  props: {
    msg: String
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