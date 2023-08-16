import axios from 'axios';
import { ref } from 'vue';

export function useDevices() {
  const isLoading = ref(false);
  const deviceList = ref([]);

  // POST Request to access devices data from the API
  const getDevices = async (payload, tokenId) => {
    isLoading.value = true;

    const req = await axios
      .post(
        'https://dev-iotdevices-api.klinkplatform.com/api/Devices/getDevices',
        payload,
        {
          headers: {
            accept: 'text/plain',
            'Content-Type': 'application/json',
            Authorization: tokenId,
          },
        }
      )
      .then((response) => {
        deviceList.value = response;
        isLoading.value = false;
      })
      .catch((error) => {
        deviceList.value = error.response.data.error;
        isLoading.value = false;
      });
  };

  return {
    getDevices,
    isLoading,
    deviceList,
  };
}
