const dev = {
  MVL_BACKEND_URL: 'https://gateway.marvel.com:443/v1/public',
  MVL_PUBLIC_API_KEY: '6112ca8e9a416e376c7aabb2915700d1'
};

const prod = {
  MVL_BACKEND_URL: 'https://gateway.marvel.com:443/v1/public',
  MVL_PUBLIC_API_KEY: '6112ca8e9a416e376c7aabb2915700d1'
};

export const api = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? dev : prod;
