import { useState, useEffect } from 'react';
import Axios from 'axios'

const useAxiosGet = (url) => {
  const [data, setData] = useState(url);
  useEffect(() => {
    Axios.get(url)
    .then(response => {
      setData(response.data)
      console.log("useAxiosGet response: ",response.data)
    })
  }, [url])

  return [data, setData]
}

export default useAxiosGet