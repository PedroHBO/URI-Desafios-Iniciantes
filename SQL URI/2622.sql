select cust.name
from customers cust
inner join legal_person lp on cust.id=lp.id_customers;