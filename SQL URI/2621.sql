select prod.name
from products prod
inner join providers prov on prod.id_providers=prov.id
where prov.name LIKE 'P%' and prod.amount between 10 and 20;