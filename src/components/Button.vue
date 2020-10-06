<template>
    <button class="button"  @click="$emit('click')"><span><slot /></span></button>
</template>
<style lang="scss" scoped>
  .button {
    margin-left: 1.2rem;
    font-family: 'Lato', sans-serif;
    font-size: 0.9rem;
    position: relative;
    background: inherit;
    text-decoration: none;
    border: 0.2rem solid;
    border-radius: .3rem;
    padding: 0.3rem 1rem;
    padding-bottom: 0.4rem;

    .button span {
      background: inherit;
    }
  
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: #001a1f;
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
      background: #001a1f;
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