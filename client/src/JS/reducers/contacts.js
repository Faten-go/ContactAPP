//import constants
import{GET_CONTACTS_FAIL,GET_CONTACTS_SUCCESS,GET_CONTACTS_LOAD} from "../constants/contacts";
//INITIALISATE
const initialState={
  contacts:[],
  loadContacts:false,
  errors:null,
};
export const contactReducer=(state=initialState,{type, payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD:return {...state,loadContacts:true};
         case GET_CONTACTS_SUCCESS:return {...state,contacts:payload,loadContacts:false};
         case GET_CONTACTS_FAIL:return {...state,loadContacts:false,errors:payload};
        default:return state
    }
}