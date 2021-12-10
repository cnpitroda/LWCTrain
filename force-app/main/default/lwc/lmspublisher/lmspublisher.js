import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLE_CHANNEL from '@salesforce/messageChannel/SampleChannel__c';

export default class Lmspublisher extends LightningElement {
        message = 'default message';

        @wire(MessageContext) messageContext;

        handleChange(event){
            this.message = event.target.value;
        }

        handleClick(){
            const message = {data : this.message};
            //publishing the message 
            publish(this.messageContext,SAMPLE_CHANNEL,message );
        }
}