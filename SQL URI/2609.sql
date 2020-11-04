select t2.name, sum(amount) "sum"
from products t1, categories t2
where t1.id_categories = t2.id
group by t2.name;