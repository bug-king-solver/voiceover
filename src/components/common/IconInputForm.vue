<template>
  <q-input filled bottom-slots v-model="text" label="Twitter">
    <template v-slot:prepend>
      <q-icon name="place" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>
<script>
export default {};
</script>
