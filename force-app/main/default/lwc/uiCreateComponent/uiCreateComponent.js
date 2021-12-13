import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class UiCreateComponent extends LightningElement {

    accountId;
    name = '';
    error;

    handleChange(event){
        this.accountId = undefined;
        this.name = event.target.value;
    }

    handleClick(){
        const fields = {};
        fields[ACCOUNT_NAME.fieldApiName] = this.name;
        const recordInput = {apiName:ACCOUNT_OBJECT.objectApiName,fields };
        createRecord(recordInput)
        .then(account=> {
                this.accountId = account.id;
         })
         .catch(error => {
             this.error = error;
             console.log('error'+JSON.stringify(this.error));
         })
    }

}