select  a.id, a.name
from movies a, prices b
where a.id_prices = b.id and b.value < 2.00;