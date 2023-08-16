<template>
  <Layout :siteName="pageTitle">
    <InputGroup class="search-block" compact>
      <Input
        class="search-input"
        v-model:value="apiKey"
        placeholder="Enter API Key"
      />
      <Button type="primary" @click="getDevicesList">Submit</Button>
    </InputGroup>
    <Table :columns="columns" />
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from '../components/Layout.vue';
import { Table, InputGroup, Input, Button } from 'ant-design-vue';
import { useDevices } from '../composables/useDevices';

const { getDevices } = useDevices();

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const apiKey = ref('');

defineProps({
  pageTitle: String,
});

const getDevicesList = () => {
  const payload = {
    orderTypes: 3,
    page: 1,
    pageSize: 100,
  };

  getDevices(payload, apiKey.value);
};
</script>

<style scoped>
.search-block {
  text-align: right;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #cdcdcd;
}

.search-input {
  width: 15%;
}
</style>
