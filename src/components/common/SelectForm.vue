<template>
  <div>
    <label :for="role">{{ desc }}</label>
    <q-select
      :rounded="round"
      :label="label"
      :options="options"
      v-bind="{ ...$props, ...$attrs }"
    />
  </div>
</template>
<script>
export default {
  props: {
    role: String,
    desc: String,
    options: Array,
    round: Boolean,
  },
  setup() {
    return {};
  },
};
</script>
