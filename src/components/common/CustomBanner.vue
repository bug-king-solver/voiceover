<template>
  <q-banner rounded class="bg-cyan-2">
    <template v-slot:avatar>
      <img :src="imgUrl" style="width: 32px; height: 32px" />
    </template>
    {{ desc }}
  </q-banner>
</template>
<script>
export default {
  props: {
    desc: String,
    src: String,
  },
  setup(props) {
    const imgUrl = "/assets/img/" + props.src + ".png";
    console.log(imgUrl);
    return {
      imgUrl,
    };
  },
};
</script>
