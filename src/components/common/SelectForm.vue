<template>
  <div>
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
    options: Array,
    round: Boolean,
  },
  setup() {
    return {};
  },
};
</script>
