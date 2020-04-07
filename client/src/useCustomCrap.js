import { useState, useEffect } from 'react';
import Axios from 'axios'

const useCustomCrap = (initialcrap) => {
  const [data, setData] = useState(initialcrap);
  return [data, setData]
}

export default useCustomCrap