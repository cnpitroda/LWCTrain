import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_WEBSITE from '@salesforce/schema/Account.Website';

export default class CreateAccount extends LightningElement {
    accountObject = ACCOUNT_OBJECT;
    nameField = ACCOUNT_NAME;
    websiteField = ACCOUNT_WEBSITE;
    accountId;

    handleSuccess(event){
        this.accountId =  event.detail.id;
    }
}