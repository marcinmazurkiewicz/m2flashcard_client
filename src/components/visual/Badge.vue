<template>
  <span class="badge"><slot /></span>
</template>
<style lang="scss" scoped>
  .badge {
    font-family: $baseFont;
    font-size: 0.75rem;
    position: relative;
    background: inherit;
    text-decoration: none;
    border: 0.18rem solid;
    border-radius: .3rem;
    padding: 0.3rem 1rem;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: $bgLighter;
      height: 0.3em;
      right: 38%;
      top: -0.21em;
      transform: skewX(-45deg);
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: $bgDarker;
      height: 0.3em;
      left: 37%;
      bottom: -0.25em;
      transform: skewX(-45deg);
    }
  }

  .badge + .badge {
        margin-left: 1.2rem;
  }
</style>