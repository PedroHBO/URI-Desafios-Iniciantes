select prod.name, cat.name
from categories cat
inner join products prod on cat.id=prod.id_categories
where prod.amount>100 and cat.id in(1,2,3,6,9)
order by cat.id ASC;