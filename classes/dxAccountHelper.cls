/**
 * @description: helper functions for account lightning components.
 * @since 2020-05-24
 * @author akemoli
 */
public without sharing class dxAccountHelper {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        List<Account> accounts = [SELECT Name, AccountNumber, Type FROM Account LIMIT 10];
        return accounts;
    }
}
