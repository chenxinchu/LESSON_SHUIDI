import re

re_telephone = re.compile(r'^(\d{3})-(\d){5,8}$')
print(re_telephone.match('010_123456').groups())

