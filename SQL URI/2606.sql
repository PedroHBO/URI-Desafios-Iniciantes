select t1.id, t1.name 
from products t1, categories t2
where t1.id_categories = t2.id
AND t2.name LIKE 'super%';