import { LightningElement } from 'lwc';
import EnglishNum1 from '@salesforce/label/c.EnglishNum1';
import EnglishNum2 from '@salesforce/label/c.EnglishNum2';
import HindiNum1 from '@salesforce/label/c.HindiNum1';
import HindiNum2 from '@salesforce/label/c.HindiNum2';
import SpanishNum1 from '@salesforce/label/c.SpanishNum1';
import Spanish_Num2 from '@salesforce/label/c.Spanish_Num2';
import ResultEnglish from '@salesforce/label/c.ResultEnglish';
import ResultHindi from '@salesforce/label/c.ResultHindi';
import ResultSpanish from '@salesforce/label/c.ResultSpanish';
import TitleEnglish from '@salesforce/label/c.TitleEnglish';
import TitleHindi from '@salesforce/label/c.TitleHindi';
import TitleSpanish from '@salesforce/label/c.TitleSpanish';

export default class CalcComponent extends LightningElement {
    result;
    no1;
    no2;
    num1label= EnglishNum1;
    num2label=EnglishNum2;
    resultlabel=ResultEnglish;
    titlelabel=TitleEnglish;
    value = 'English';

    get options() {
        return [
            { label: 'English', value: 'English' },
            { label: 'Hindi', value: 'Hindi' },
            { label: 'Spanish', value: 'Spanish' },
        ];
    }

    handleComboChange(event) {
        this.value = event.detail.value;
        switch(this.value){
            case 'English':
                this.num1label= EnglishNum1;
                this.num2label=EnglishNum2;
                this.resultlabel=ResultEnglish;
                this.titlelabel=TitleEnglish;
                break;
            case 'Hindi':
                this.num1label= HindiNum1;
                this.num2label=HindiNum2;
                this.resultlabel=ResultHindi;
                this.titlelabel=TitleHindi;
                break;
            case 'Spanish':
                this.num1label= SpanishNum1;
                this.num2label=Spanish_Num2;
                this.resultlabel=ResultSpanish;
                this.titlelabel=TitleSpanish;
                break;

        }
    }
   
    handleChange(event){
      
        if(event.target.name=='no1'){
            this.no1 = parseInt(event.target.value);
        }else if(event.target.name=='no2'){
            this.no2 = parseInt(event.target.value);
        }
    }

    handleClick(evt){
      
      console.log('Click called'+evt.target.name);
      switch(evt.target.name){
          case '+': this.result =  this.no1+this.no2;
                     break;
          case '-': this.result =  this.no1-this.no2;
                     break;
          case '*': this.result =  this.no1*this.no2;
                     break;
          case '/': this.result =  this.no1/this.no2;
                     break;
      }
       
    }
}