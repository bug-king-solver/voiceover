<template>
  <label :for="role" class="text-h6">{{ desc }}</label>
</template>
<script>
export default {
  props: {
    desc: String,
    role: String,
  },
};
</script>
