import axios from 'axios';
import { ref } from 'vue';

export function useDevices() {
  const loading = ref(true);

  const getDevices = (payload, tokenId) => {
    axios
      .post(
        'https://dev-iotdevices-api.klinkplatform.com/api/Devices/getDevices',
        payload,
        {
          headers: {
            accept: 'text/plain',
            'content-type': 'application/json',
            Authorization: tokenId,
          },
        }
      )
      .then((response) => {
        loading.value = false;
        console.log(response);
      })
      .catch((error) => error.response.data);
  };

  return { getDevices };
}
