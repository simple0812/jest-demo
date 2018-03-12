如果新的模块有增删改查等功能 可以使用一下流程实现
1.src/config/api 添加对应的api接口地址
2.src/models/ 添加新的model 继承baseModel
3.src/router.js 添加model的引用
4.src/services/ 添加新的service 继承baseService 
  传入model的名称来映射api接口地址
  如果有模拟数据需要传入模拟数据
5.添加component
