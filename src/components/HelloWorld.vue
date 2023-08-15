<script setup>
import { ref } from 'vue';
import { Button, Table } from 'ant-design-vue';
import 'ant-design-vue/lib/button/style';

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
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <Table :dataSource="dataSource" :columns="columns" />

  <div class="card">
    <Button type="primary" @click="count++">count is {{ count }}</Button>
  </div>
</template>
