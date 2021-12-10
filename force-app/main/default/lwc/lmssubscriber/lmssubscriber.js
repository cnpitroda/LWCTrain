import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import SAMPLE_CHANNEL from '@salesforce/messageChannel/SampleChannel__c';

export default class Lmssubscriber extends LightningElement {
    receivedMessage = 'No Message to show';
    subscription = null;

    @wire(MessageContext) messageContext;
    
    handleSubscribe(){
        this.subscription = subscribe(this.messageContext, SAMPLE_CHANNEL , (message)=> {
            this.handleMessage(message);
        });
    }

    handleMessage(message){
        this.receivedMessage = message ? JSON.stringify(message,null,"\t"):"no message to show";
    }
}