// import axios from 'axios';
import { showAlert } from './alerts.js';
export const updateSettings = async(data,type) =>{
 try{
    const url = type ==='password' 
    ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
    : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    const res = await axios({
        method:'PATCH',
        url,
        data
    });
    if(res.data.status === 'success'){
        // console.log(res.data);
        showAlert('success', `${type.toUpperCase()} Data updated successfully!`);
    }
 }catch(err){
    showAlert('error',err.response.data.message);
 }
}