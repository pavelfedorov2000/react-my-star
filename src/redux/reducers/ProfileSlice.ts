import { createSlice } from "@reduxjs/toolkit";
import { ProfileTitle } from "../../enums/Profile";

interface ProfileState {
    data: {
        credentials: {
            name: string;
            title: string;
            fields: {
                USER_NAME: string;
                USER_SURNAME: string;
            }
        },
        contacts: {
            name: string;
            title: string;
            fields: {
                USER_PHONE: string;
                USER_EMAIL: string;
            }
        },
        security: {
            name: string;
            title: string;
            fields: {
                USER_PASSWORD: string;
                USER_NEW_PASSWORD: string;
                USER_REPEAT_NEW_PASSWORD: string;
            }
        }
    }
}

const initialState: ProfileState = {
    data: {
        credentials: {
            name: ProfileTitle.Credentials,
            title: 'Учетные данные',
            fields: {
                USER_NAME: 'Константин',
                USER_SURNAME: 'Иванов'
            }
        },
        contacts: {
            name: ProfileTitle.Contacts,
            title: 'Контактные данные',
            fields: {
                USER_PHONE: '+ 375 (29) 123 45 67',
                USER_EMAIL: 'ivanov.konstantin@mail.ru'
            }
        },
        security: {
            name: ProfileTitle.Security,
            title: 'Безопасность',
            fields: {
                USER_PASSWORD: '',
                USER_NEW_PASSWORD: '',
                USER_REPEAT_NEW_PASSWORD: ''
            }
        }
    }
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        editCredentials(state, action) {
            //state.data.credentials[action.payload.name]: action.payload.value
        },
        editContacts(state, action) {
            
        },
        editSecurity(state, action) {
            
        },
    }
});

export default profileSlice.reducer;