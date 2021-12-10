import { LightningElement, api } from 'lwc';
import {upperCaseName} from './util';


export default class SampleComponent extends LightningElement {
 
    firstName='fname';
    lastName='lname';
    @api companyName;
    fullName='fname lname';

    firstTemplate = true;

    items = [{id:1,name:'LWC',id:2,name:'Training'}];

    //To render templates conditionally
    handleSwitch(){
        this.firstTemplate = this.firstTemplate === true ? false : true;
    }
   
    //Triggered when first name and last name are changed
    handleChange(event){
        console.log('event.target.name'+event.target.name);
        if(event.target.name=='firstName'){
            this.firstName = event.target.value;
        }else if(event.target.name=='lastName'){
            this.lastName = event.target.value;
        }
        this.fullName = upperCaseName(this.firstName,this.lastName);
        
    }
    
   //Converting fullname to UpperCase
   /*
    get upperCaseName(){
        return this.fullName.trim().toUpperCase();
    }*/
    
    @api
    updateName(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
        this.fullName = upperCaseName(this.firstName,this.lastName);
    }

    handleNotifyParent(event){
        let eventDetail = {fname:this.firstName, lname:this.lastName};
        let evt = new CustomEvent('sampleevent',{detail:eventDetail});
        this.dispatchEvent(evt);
    }
}