<template>
    <button class="button"  @click="$emit('click')"><span><slot /></span></button>
</template>
<style lang="scss" scoped>

  .button {
    margin-left: 8px;
    font-family: 'Lato', sans-serif;
    font-size: 0.9rem;
  position: relative;
  background: none;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid ;
  border-radius: .3rem;
  padding: 0.3em .5em;
  padding-bottom: 0.1rem;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #001519;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
}

</style>