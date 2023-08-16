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

    <Table :dataSource="tableContent" :columns="columns" :loading="isLoading">
    </Table>
  </Layout>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import Layout from '../components/Layout.vue';
import { Table, InputGroup, Input, Button, message } from 'ant-design-vue';
import { useDevices } from '../composables/useDevices';

const { getDevices, isLoading, deviceList } = useDevices();

defineProps({
  pageTitle: String,
});

const apiKey = ref('');

const columns = [
  {
    title: 'Display Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Telemetry',
    dataIndex: 'telemetryTypes',
    key: 'telemetryTypes',
  },
  {
    title: 'Units',
    dataIndex: 'units',
    key: 'units',
  },
  {
    title: 'Zones',
    dataIndex: 'zones',
    key: 'zones',
  },
  {
    title: 'Connectivity',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Data Streaming',
    dataIndex: 'isDisabled',
    key: 'isDisabled',
  },
];

const devices = computed(() => deviceList?.value);

// Store all the devices table data in one array.
const tableContent = computed(() => {
  return devices?.value?.data?.data?.devices?.map((value) => {
    return {
      name: value?.displayName,
      telemetryTypes: value?.telemetryTypes[0]?.name,
      units: value?.units[0]?.name,
      zones: value?.zones[0]?.name,
      status: value?.status ? 'On' : 'Off',
      isDisabled: value?.isDisabled ? 'On' : 'Off',
    };
  });
});

// Passing payload and API Key to the getDevices method to execute POST request
const getDevicesList = () => {
  // Hardcoded payload based on API doc.
  const payload = {
    orderTypes: 3,
    page: 1,
    pageSize: 100,
  };

  if (!apiKey.value.length) {
    message.warning('Please enter API Key');

    return;
  }

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
