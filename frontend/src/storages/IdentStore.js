import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Buffer } from 'buffer';

import AsyncStorage from '@react-native-async-storage/async-storage';


const useIdentStore = create(set => ({
    hideUserOptions: true,

    setHideUserOptions: (hideUserOptions_) => set(state => ({ hideUserOptions: hideUserOptions_ })),

    getGroup: async () => {
        try {
            let token = await AsyncStorage.getItem('access_token')
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64'))['group']
        } catch (e) { }
        return ""
    },

}))

export default useIdentStore;