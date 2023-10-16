// Trong useUserDetails.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { isJsonString } from '@/app/untils';
import { updateUser } from '@/redux/slides/userSilde';
import * as userService from '../service/userService';
import { iDecode } from '@/types/types'; 

const useUserDetails = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleGetDetailsUser = async (id: string, token: string) => { 
            const res = await userService.getDetailUser(id, token)
            dispatch(updateUser({ ...res?.data, access_token: token, }))
        } 

        const storageData = localStorage.getItem('access_token');

        if (storageData && isJsonString(storageData)) { 
            const parsedData = JSON.parse(storageData);  
            if(parsedData){
                const decode: iDecode = jwt_decode(parsedData);
                console.log("decode", decode);
                if(decode?.id){
                    handleGetDetailsUser(decode?.id, parsedData)
                }
            }
        }
    }, [dispatch]);

    return null;
}

export default useUserDetails;
