import { LightningElement ,api,wire,track} from 'lwc';
import getAccounts from '@salesforce/apex/dxAccountHelper.getAccounts'

export default class dxAccountList extends LightningElement {
    @track columns = [
        {label: 'Account name', fieldName: 'Name', type: 'text'},
        {label: 'Account Type', fieldName: 'Type', type: 'text' },
        {label: 'Account Number', fieldName: 'AccountNumber' }    
    ];

    @track error;
    @track accounts;
    @wire(getAccounts) wiredAccounts({error, data}) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            this.error = error;
        }
    };
}