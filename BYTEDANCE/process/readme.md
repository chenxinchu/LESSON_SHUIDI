1. 从前端角度  
  node.js是单线程吗？js运行在服务器端  
  js 是单线程  
  基于事件机制event loop 回调  
  no  
  单线程 js  
  ajax？ 微软发明的一个对象 就是一个人新的线程   
  js 是单线程的，但是js所在地宿主容器(浏览器)是多线程、多进程的  
  注册在了主线程event事件里  
  线程之间可以相互通信

2. node 当前的main.js 启动了一个进程 procexss pid  
  服务器端天生就是多线程的，分布式的  
  js 在服务器端执行也是单线程的  
  node是服务器端js执行的 容器 node 是多进程的 node10是多线程  
  单线程 异步 IO 高性能高并发  

  node.js 容器node 高并发 异步无阻塞 
  创建进程、线程 


- 进程的两种方式 
  child_process  fork  web worker
  cluster  fork  
  提升运行效率 把cpu  
  nginx 负载均衡  