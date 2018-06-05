import axios from 'axios';

const getRequest = url => {
  return axios.get(url).catch(
    err => console.log(err)
  )
}

export default {
  getAll: _ => getRequest('./data/goals.collection.json')
}