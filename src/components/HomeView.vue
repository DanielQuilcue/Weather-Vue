<script setup>
import { ref } from "vue";
import Axios from "axios";

const searchQuery = ref("");
const queryTimeout = ref(null);

const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";

const getSearchResult = () => {
  queryTimeout.value = setTimeout(async () => {
    if(searchQuery.value !== "") {
      const result = await Axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
      )
    }
  })
}
</script>
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" placeholder="search for a city or state"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]" />
    </div>

  </main>
</template>



<style lang="scss" scoped></style>import { Axios } from "axios";import { Axios } from "axios";
import { Axios } from "axios";

