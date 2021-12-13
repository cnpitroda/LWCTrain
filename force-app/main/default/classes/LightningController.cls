public with sharing class LightningController {
  
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        
        return [Select Id,FirstName,LastName,Email,Phone from Contact LIMIT 10] ;
    }

    @AuraEnabled
    public static void updateContacts(Object data){
       List<Contact> contactsList = (List<Contact>) JSON.deserialize(
           JSON.serialize(data),
           List<Contact>.class
       );
       update contactsList;
      
    }
   
}
