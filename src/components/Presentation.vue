<template>
    <div>
        <h1> {{ animal.nom }} </h1>
        <p>
            Présentation de l'animal
        </p>
        <div class="presentation_animal">
          <img style="padding-left: 25%; padding-right: 5%;" alt="dog" :src="animal.photo" />
          <div>
            <div>
                <p class="texte"> Age: </p>
                {{ animal.age }}
              </div>
            <div>
              <p class="texte"> Race: </p>
              {{ animal.race }}
            </div>
            <div>
              <p class="texte"> Description: </p>
              {{ animal.description }}
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Presentation",
  props: {
    msg: String,
    animal: {},
  },
};
</script>
<style scoped>

.presentation_animal{
  display: flex;
  flex-direction: row;
}

.texte {
  font-weight: bold;
}

</style>