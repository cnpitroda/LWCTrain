import { LightningElement, api } from 'lwc';

export default class SampleComponent extends LightningElement {
 
    firstName='fname';
    lastName='lname';
    @api companyName;
    fullName='fname lname';
   
    //Triggered when first name and last name are changed
    handleChange(event){
        console.log('event.target.name'+event.target.name);
        if(event.target.name=='firstName'){
            this.firstName = event.target.value;
        }else if(event.target.name=='lastName'){
            this.lastName = event.target.value;
        }
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    
   //Converting fullname to UpperCase
    get upperCaseName(){
        return this.fullName.trim().toUpperCase();
    }
    
    @api
    updateName(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
}