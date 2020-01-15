<template>
  <div class="home">
    <widgets-panel></widgets-panel>
    <page-container></page-container>
  </div>
</template>

<script>
import { PageContainer, WidgetsPanel } from '@/components/index'

export default {
  name: 'home',
  components: {
    [PageContainer.name]: PageContainer,
    [WidgetsPanel.name]: WidgetsPanel
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  min-height: 100vh;
}
</style>

<style lang="less">
.home {
  .page-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
