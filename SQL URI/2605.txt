select pro.name, prov.name 
from products pro, providers prov 
where pro.id_providers = prov.id 
and pro.id_categories = 6;