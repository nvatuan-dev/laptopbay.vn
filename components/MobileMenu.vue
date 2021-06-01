<template>
  <div>
    <BubbleMenu width="200" left disableOutsideClick :closeOnNavigation="true" noOverlay>
      <router-link :to="'/'" title="Home" id="Home">
        <span>Home</span>
      </router-link>
      <router-link :to="'/'" title="Profile" id="Profile">
        <span>Profile</span>
      </router-link>
      <router-link :to="'/'" title="Blog" id="Blog">
        <span>Blog</span>
      </router-link>
      <router-link :to="'/'" title="Photography" id="Photography">
        <span>Photography</span>
      </router-link>
      <router-link :to="'/'" title="Social" id="Social">
        <span>Social</span>
      </router-link>
      <router-link :to="'/'" title="Contact" id="Contact">
        <span>Contact</span>
      </router-link>
    </BubbleMenu>
  </div>
</template>
<style>
    .bm-burger-button {
      margin: 30px 0 0 10px;
      width: 20px;
      height: 18px;
      left: 20px;
      top: 20px;
      cursor: pointer;
    }
</style>

