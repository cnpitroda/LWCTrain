import { LightningElement,api,wire } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_EMAIL_FIELD from '@salesforce/schema/Account.Owner.Email';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

export default class ViewAccountParent extends LightningElement {

    objectName = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
   
    @api recordId;

    @wire(getRecord, {recordId:"$recordId", fields :[OWNER_NAME_FIELD,OWNER_EMAIL_FIELD]}) record;

    get ownerEmailField(){
            return this.record.data ? getFieldValue(this.record.data,OWNER_EMAIL_FIELD) : "";
    }
    
    get fullNameField(){
            return this.record.data ? getFieldValue(this.record.data,OWNER_NAME_FIELD) : "";
    }
}