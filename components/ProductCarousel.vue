<template>
  <div class="demo">
    <CarouselCard :interval="7000" height="260px" type="card" arrow="always">
      <CarouselCardItem v-for="i in 6" :key="i">
        <h1 v-text="i"></h1>
      </CarouselCardItem>
    </CarouselCard>
  </div>
</template>
<style scoped>
  .demo {
    width: 800px;
    margin: 0 auto
  }
  h1 {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background: linear-gradient(90deg, rgba(88,140,236,1), rgba(106,106,207,1))
  }
</style>