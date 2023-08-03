import axios from "axios";

const apiEndpoint = 'https://warehouzitserver.onrender.com/api/v1/auth/register';

export const postFormData = async (formData) => {
  try {
    const response = await axios.post(apiEndpoint, formData)
    const data = await response.data
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}