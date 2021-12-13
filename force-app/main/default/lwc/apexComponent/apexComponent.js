import { LightningElement , wire } from 'lwc';
import getContacts from '@salesforce/apex/LightningController.getContacts';
import updateContacts from '@salesforce/apex/LightningController.updateContacts';
import {getRecordNotifyChange} from 'lightning/uiRecordApi';
 
const COLS = [{label : 'First Name',fieldName:'FirstName',editable:true},
            {label : 'Last Name',fieldName:'LastName',editable:true},
            {label : 'Phone',fieldName:'Phone',type:'phone'},
            {label : 'Email',fieldName:'Email',type:'email',editable:true},
        ]

export default class ApexComponent extends LightningElement {
    columns = COLS;
    draftValues = [];

    @wire(getContacts) contact;


    //To save contact from Data table
    handleSave(event){

        const updatedFields = event.detail.draftValues;

        const notifyChangedIds = updatedFields.map(row => {return   {"recordId":row.id} });

        try{
               const result =  updateContacts({data:updateFields}); 

               getRecordNotifyChange(notifyChangedIds);

        }catch(error){
            //handle error if any
        }

    }

}