<template>
  <div>
    <label for="role">{{ desc }}</label>
    <div class="row justify-start">
      <q-radio
        v-bind="{ ...$props, ...$attrs }"
        label="Yes"
        val="Yes"
      ></q-radio>
      <q-radio v-bind="{ ...$attrs }" label="No" val="No"></q-radio>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    desc: String,
    radiodesc: Array,
    readioval: Array,
  },
  setup(props) {
    // console.log(props.radiodesc);
  },
};
</script>
