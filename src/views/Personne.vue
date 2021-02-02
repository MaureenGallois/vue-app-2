<template>
  <div class="about">
    <div>
        <router-link to="/personne">Cliquez-moi</router-link>
    </div>
    <Presentation msg="Bienvenue :)" />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation.vue";

export default {
  name: "Personne",
  components: {
    Presentation
  }
};
</script>