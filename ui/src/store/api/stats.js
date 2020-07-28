import http from '@/store/helpers/http';

const getStats = async () => http().get('/statss')
  .then((response) => {
    console.log('API THEN');
    if (response.data);
    return Promise.resolve(response);
  })
  .catch((error) => {
    console.log('API CATCH');
    return Promise.reject(error);
  });

export { getStats as default };
