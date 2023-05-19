import { useState } from "react";

import API from "./../API/Auth"
import useIdentStore from "../storages/IdentStore";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState(false);
    
    const apiObject = new API();
    const { setAccess, setRefresh } = useIdentStore();

    return {

        loading, authStatus, 

        async login(phone, password) {
            setLoading(true);
            const response = await apiObject.login(phone, password)
            setLoading(false);

            if (response['code'] === 200) {
                setAuthStatus(true);
                console.log(response.data)
                 await AsyncStorage.setItem('access_token', response.data.access);
				 await AsyncStorage.setItem('refresh_token', response.data.refresh);
            }

            return response
        },

       
    }
}