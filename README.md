# mongodb-ansible

generic install for mongodb  instance on rhel 8 servers, including software unpacking and creation of service and conf files

**HOW TO**

1. **downloads**:  
- download latest mongodb software tgz for server,shell,tools from:
https://www.mongodb.com/try/download/community

  alternative: download kept static versions:
https://drive.google.com/drive/folders/1cAhUdsBT1dS_7XvIGmr9TSGe-2k7jCok?usp=sharing
- also download this repo  
- also download ansible rhel 8 install from:  
https://github.com/avi-azar-1/rhel8.8-ansible

2. **install ansible**:  
look at instructions in ansible repo

3. **ready redis install**:  
unzip this repo in target server
add 'software' directory and put three tgz files there
run script to add mongodb ansible collection
```bash
./move_collection.sh
```

4. **edit playbook**:  
change target server and parameters inside mongo_inventory.yaml

5. **run playbook**:  
from playbook folder:
```bash
ansible-playbook -i mongo_inventory.yaml installmongodb.yaml
```
for local install (without ssh) run with '-c local' flag  
for remote ssh create id_rsa.pub in ansible server and copy to known_hosts in target server  
