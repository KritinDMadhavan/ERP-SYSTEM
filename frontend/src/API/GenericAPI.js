import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axios';


export default class GenericAPI {

    async graphQL(url, queryText, variablesData) {
        try {
            const response = await axiosInstance.post(url, {
                query: queryText,
                variables: variablesData
            },
                {
                    headers: {
                        "Authorization": "JWT " + AsyncStorage.getItem('access_token')
                    },
                }
            )

            return { "code": response.status, "data": response.data };

        } catch (error) {
            if (error.response) {
                // Request made and server responded
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                console.log(error.response.status)
                return { "code": error.response.status, "data": error.response.data }
            } else if (error.request) {
                // The request was made but no response was received
                // console.log(error.request);
                return { "code": -1, "data": error.request }
            } 
            else if (error === "SendLogin")
            {
                return {"code": -2, "data": "Send user to Login"}
            }
            else {
                // Something happened in setting up the request that triggered an Error
                return { "code": -3, "data": error.message }
            }
        }

    }

}