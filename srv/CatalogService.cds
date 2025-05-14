using { epm.db.master, epm.db.transaction } from '../db/data-model';

service CatalogService @(path:'catalogService', requires:'authenticated-user') {

    entity BusinessPartnerSet as projection on master.businesspartner;
    entity AddressSet as projection on master.address;
    entity EmployeeSet 
    @(restrict: [
     { grant: 'READ',to: 'Viewer', where:'bankName = $user.BankName' },
      { grant: 'WRITE',to: 'Admin',  }
      ])
    
    as projection on master.employees;
    entity ProductSet as projection on master.product;
    entity POs as projection on transaction.purchaseorder;
    entity POItems as projection on transaction.poitems;

}