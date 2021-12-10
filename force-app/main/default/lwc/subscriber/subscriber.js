import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';


export default class Subscriber extends LightningElement {
    receivedMessage = 'No message to show';

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('pubsubevent',this.handleEvent,this);
    }

    handleEvent(payload){
        this.receivedMessage = payload;
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

}