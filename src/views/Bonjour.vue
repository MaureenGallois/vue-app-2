<template>
  <div>
    <div class="liste">
      <div class="position">
        <img class="img_logo_spa" src="../assets/spa.png"/>
        <div class="center">
          <h1>Bonjour</h1>
        </div>
      </div>
      <div>
          <p> Bienvenue sur la page de la SPA, catégorie toutou :)</p>
          <p> Tous ces petits chiens attendent de trouver une famille aimante, gentille, qui prendra soin de lui </p>
      </div>
      <div class="global">
        <div class="search_list">
          <div class="search_race">
              <input type="text" v-model="searchAnimal" placeholder="Entrer la race d'un animal" />
          </div>
          <div>
            <v-list class="box_animaux" v-for="animal in filteredAnimaux" :key="animal.id">
                <div>
                  <img class="icone_animal" :src="animal.photo">
                </div>
                <div class="nom_animal">
                  {{ animal.nom}}
                </div>
                <div class="ajout_favoris">
                  <button
                    :disabled="buttonDisabled != false"
                    @click="ajout_favori(animal.nom)"
                  > ♡</button>
                  <button>
                    <router-link :to="{ name: 'Animal', params: { id: animal.id }}" >
                      Voir détails
                    </router-link>
                  </button>
                </div>
              </v-list>
            </div>
          </div>
        <div class="favori">
          <h2>Votre liste de favoris</h2>
            <v-list v-for="(listFav, index) in listFavori" :key="index">
                <li class="nom_animal">
                  {{ listFav }}
                </li>
              </v-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bonjour",
  data() {
    return {
      searchAnimal: '',
      listFavori: [],
      buttonDisabled : false,
      "animaux": [
        {
            id: 1,
            nom : "Oslo",
            race: "Berger Allemand",
            age: "2 ans",
            photo: "https://images.dog.ceo/breeds/germanshepherd/n02106662_16129.jpg",
            description: "Jeune chiot adorable"
        },
        {
            id: 2,
            nom : "Marie",
            race: "Cocker",
            age: "6 ans",
            photo: "https://images.dog.ceo/breeds/setter-gordon/n02101006_18.jpg",
            description: "Magnifique cocker noir"
        },
        {
            id: 3,
            nom : "Diamant",
            race: "Bichon",
            age: "2 ans",
            photo: "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg",
            description: "Petit bichon"
        },
        {
            id: 4,
            nom : "Ikem",
            race: "Colley",
            age: "7 ans",
            photo: "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_16948.jpg",
            description: "Attend un gentil maître"
        },
        {
            id: 5,
            nom : "Pepsi",
            race: "Beagle",
            age: "3 mois",
            photo: "https://images.dog.ceo/breeds/beagle/n02088364_10585.jpg",
            description: "Chiot abondonné"
        },
        {
            id: 6,
            nom : "Kiko",
            race: "Husky",
            age: "2 ans",
            photo: "https://images.dog.ceo/breeds/eskimo/n02109961_9348.jpg",
            description: "Très joueur"
        }
      ]
    }
  },
  created() {
    for(var i=0; i< this.animaux.length; i++) {
      localStorage.setItem(this.animaux[i].id, JSON.stringify(this.animaux[i]))
    }
  },
  computed: {
        filteredAnimaux() {
            var animaux_array = this.animaux;
            var searchAnimal = this.searchAnimal;

            if(!searchAnimal){
                return animaux_array;
            }

            searchAnimal = searchAnimal.trim().toLowerCase();

            animaux_array = animaux_array.filter(item => {
                if(item.race.toLowerCase().indexOf(searchAnimal) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return animaux_array;;
        }
    },
    methods: {
      ajout_favori(value){
        this.listFavori.push(value)
        this.buttonDisabled = true;
      },
    }
};
</script>
<style>

.position{
  display: flex;
  flex-direction: row;
}

.img_logo_spa {
    width: 60px;
    height: fit-content;
    margin-right: 40%;
}

.global {
  display: flex;
  flex-direction: row;
}

.search_list {
  width: -webkit-fill-available;
}
.search_race{
  display: flex;
  flex-direction: column-reverse;
  margin: 20px auto;
  width: 75%;
}

.list_animaux {
  width: 75%;
  margin: auto;
  border-collapse: collapse;
}

.box_animaux {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75px;
    padding: 15px;
    font-family: "Orkney", sans-serif;
    background-clip: border-box;

    border: solid 1px;

    border-radius: 2px;
    -webkit-box-align: center;
}

.icone_animal {
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 25%;
}

.nom_animal {
  margin: auto;
}

</style>