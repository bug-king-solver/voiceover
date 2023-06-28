<template lang="html">
  <div>
    <div class="card-title">
      <q-autocomplete v-model="school" :delay="0" :max-results="2">
        <q-search v-model="school"></q-search>
      </q-autocomplete>
    </div>
    <div class="card">
      <div class="card-content bg-white bg-blue-grey-1" v-if="school">
        <div class="row gutter wrap">
          <!-- <div class="column width-1of1">Escola {{ school.name }}</div>
          <div class="column width-1of1">Diretor {{ school.director }}</div>
          <div class="column width-1of1">Telefone {{ school.phone }}</div>
          <div class="column width-1of1">Endereço {{ school.address }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { findAll } from "services/school";
export default {
  data() {
    return {
      school: "",
    };
  },
  // methods: {
  //   getObjectsKeys() {
  //     return Object.keys(this.school);
  //   },
  //   getAllSchool(terms, done) {
  //     findAll().then((data) => {
  //       this.search = data.map((field) => ({
  //         label: field.name,
  //         value: field.id,
  //       }));
  //       console.log(" data " + JSON.stringify(this.search));
  //       done([this.search]);
  //       return data;
  //     });
  //   },
  // },
};
</script>

<style lang="css"></style>
