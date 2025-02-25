public with sharing class ContactFormController {
    @AuraEnabled
    public static Boolean sendEmail(String name, String senderEmail, String message) {
        String myEmail = 'sutermatias9@gmail.com';

        try {
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setSubject('CONTACT ME FORM');
            mail.setToAddresses(new List<String>{ myEmail });
            mail.setPlainTextBody('Name: ' + name + '\nEmail: ' + senderEmail + '\nMessage: ' + message);

            Messaging.SendEmailResult[] results = Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });

            // Check if the email was sent successfully
            if (results != null && results.size() > 0) {
                return results[0].isSuccess();
            }
        } catch (Exception e) {
            throw new AuraHandledException('Email sending failed: ' + e.getMessage());
        }
        return false;
    }
}
