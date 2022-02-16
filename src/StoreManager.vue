<template>
  <div class="hello">Hello {{who}}</div>
</template>
 
<script>
module.exports = {
  data() {
    return {
      who: 'store-manager',
    }
  },
}
</script>
 
<style>
.hello {
  background-color: #ffe;
}
</style>