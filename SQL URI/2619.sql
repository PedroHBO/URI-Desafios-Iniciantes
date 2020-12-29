select prod.name, prov.name, prod.price
from products prod
inner join categories as cat on prod.id_categories=cat.id
inner join providers as prov on prod.id_providers=prov.id
where prod.price>1000 and cat.name='Super Luxury';