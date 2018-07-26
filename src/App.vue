<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">

  * {
    -webkit-overflow-scrolling: touch;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
  }
</style>


<script>

  export default {
      beforeCreate() {
          document.addEventListener('touchmove', function (event) {
              if (event.scale !== 1) { event.preventDefault(); }
          }, false);
      }
  }

</script>