select t1.id, t1.name
from movies t1, genres t2
where t1.id_genres=t2.id 
AND t2.description = 'Action';
