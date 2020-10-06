<template>
    <button class="button"  @click="$emit('click')"><span><slot /></span></button>
</template>
<style lang="scss" scoped>
$bg: #001519;
$border-width: .2rem;
$corner-size: 2rem;
$dur: .3s;

  .button {
  font-family: 'Lato', sans-serif;
  letter-spacing: .02rem;
  cursor: pointer;
  background: transparent;
  border: $border-width solid currentColor;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    margin-left: 0.6rem;
  position: relative;
  transition: color $dur;
  
  &:hover {
    &::before { width: 0; }
    &::after { height: 0; }
  }
  &:active {
    border-width: $border-width / 2;
  }
  
  //bit lame about the extra span. 
  //it's to get the text to appear on top of the psewudo elements. is there a dom-less way to do it?
  span {
    position: relative;
    z-index: 2;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    background: $bg;
    z-index: 1;
    transition: all $dur;
  }
  //the 101% is because of a pixel rounding issue in firefox
  &::before {
    width: calc(100% - #{$corner-size});
    height: calc(101% + #{$border-width * 2});
    top: -$border-width;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    height: calc(100% - #{$corner-size});
    width: calc(101% + #{$border-width * 2});
    left: -$border-width;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>