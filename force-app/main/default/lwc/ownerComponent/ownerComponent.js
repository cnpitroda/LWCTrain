import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {

    eventParams = {};

    handleClick(){
        this.template.querySelector('c-sample-component').updateName('Test','Name');
    }

    handleSampleevent(event){
        this.eventParams = event.detail;
    }
}