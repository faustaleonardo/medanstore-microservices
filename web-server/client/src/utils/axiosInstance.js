import axios from 'axios';
const jwt = localStorage.getItem('jwt');

export default axios.create({
  headers: {
    common: {
      Authorization: `Bearer ${jwt}`,
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
});
