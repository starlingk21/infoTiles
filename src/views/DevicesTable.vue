<template>
  <Layout :siteName="pageTitle">
    <Table :dataSource="dataSource" :columns="columns" />
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import { Table } from 'ant-design-vue';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

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

defineProps({
  pageTitle: String,
});
</script>
