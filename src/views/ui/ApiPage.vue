<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import axios from "axios";
import { getPhotoApi, getTagApi } from "~/src/api/wallheaven";

const getPhoto = async () => {
  // const res = await axios.get("http://127.0.0.1:8000/tags");
  // console.log(res);

  const res2 = await fetch("http://127.0.0.1:8000/tags");
  console.log(res2);
};
const getTag = async () => {
  const res = await getTagApi();
  console.log(res);
};

onMounted(() => {
  getPhoto();
  getTag();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>aa</v-card-title>
          <v-card-text> cc </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>
