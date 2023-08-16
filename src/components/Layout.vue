<template>
  <Layout :siteName="siteName">
    <LayoutHeader>
      <div class="logo">{{ siteName }}</div>
      <Menu
        theme="dark"
        mode="horizontal"
        :selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <MenuItem key="1">Table</MenuItem>
      </Menu>
    </LayoutHeader>
    <LayoutContent class="layout-content">
      <slot> </slot>
    </LayoutContent>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
} from 'ant-design-vue';

defineProps({
  siteName: String,
});

// Hardcoding the navigation element as active
const selectedKeys = ref(['1']);
</script>

<style scoped>
.layout-content {
  padding: 0 50px;
}
.ant-layout-header .logo {
  color: #fff;
  font-size: 22px;
  text-transform: uppercase;
  margin: 0 24px 0 0;
  width: auto;
  float: left;
  height: auto;
  line-height: 64px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
