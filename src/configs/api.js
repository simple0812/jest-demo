export default {
  /**************************导航通用**************************/
  'getApps': '/api/application/authlist', //获取所有已经授权的应用的接口 弃用
  'getAuthApps': '/api/Apps', //获取所有已经授权的应用的接口 
  'getAuthMenus': '/api/Module/modules/getauthlist', //获取所有已经授权的应用的接口 xx
  'setCustomApps': (appId, isShow) => `/api/Apps/${appId}/${isShow}`, //501
  'getMenus': (appId) =>  `/api/module/modules/${appId}`,
  'searchMenus': `/api/system/module`,

  'getMemberInfo': '/api/organize/users/GetUserInfo',
  'modifyUserinfo': '/api/BaseSystem/BaseUser/modifyUserinfo', // miss
  'modifyPassword': '/api/BaseSystem/BaseUser/RevisePassword', // miss

  'getFavs': '/api/organize/usercollects',
  'delFav': id => `/api/organize/usercollects/${id}`,
  'saveFav':'/api/organize/usercollects', 

  'getUserInfo': '/api/passport/getuserinfo',
  'authCode': '/api/authorization_code',
  'auth': '/oauth/authorize',
  'logout': '/user/logout',
  /**************************导航通用**************************/

  'getAppList':'/api/Apps',// 新版获取所有应用的接口
  'createApp':'/api/Apps',
  'updateApp':(id) => `/api/Apps/${id}`,
  'deleteApp':(id) => `/api/Apps/${id}`,
  'deleteApps':'/api/Apps',
  'toggleApp':(id) => `/api/Apps/enable/${id}`,
  'getAuthedApisOfApp':(currAppId, destAppId) => `/api/apiauth/${currAppId}/${destAppId}/apiids`, //xx
  'grantApisOfApp':(currAppId, destAppId) => `/api/apiauth/${currAppId}/${destAppId}`, //xx
  'getAppsAuthored': '/api/application/admins/ownlist',//获取有应用管理权限的应用
  'grantAppToUsers':(appId) => `/api/application/admins/${appId}`,//应用授权 put

  'addMenu':'/api/module/modules',//添加菜单 post
  'updateMenu':(id) => `/api/module/modules/${id}`,//修改菜单 put
  'delMenu':(id) => `/api/module/modules/${id}`,//删除菜单 delete
  'getButtonsOfMenu':(moduleId) => `/api/module/modules/${moduleId}/buttons`,//删除菜单 delete
  'getViewsOfMenu':(moduleId) => `/api/module/modules/${moduleId}/views`,//删除菜单 delete
  'getFilterProjects':'/api/authorize/permission/scopeauthorizedproject ',
  
  'getDepartments': '/api/organize/departments/nameandidlist',//获取部门列表  只包含id fullName
  'getOrganizes': '/api/organize/organizes/nameandidlist',//获取公司列表 只包含id fullName
  'getEmployees':'/api/organize/users/usernameandid',//获取员工列表  只包含id fullName

  'getOrganizeList': '/api/organize/organizes/list',//获取公司列表 包含详细数据
  'getDepartmentList':'/api/organize/departments/list',//获取员工列表 包含详细数据
  'createOrganization':(parentId) => `/api/organize/departments/${parentId}`,
  'updateOrganization':(id) => `/api/organize/departments/${id}`,
  'deleteOrganization':(id) => `/api/organize/departments/${id}`,
  'toggleOrganization':(id) => `/api/organize/departments/${id}`,
  'setDepartmentLeader':
    (departmentId, userId) => `/api/organize/departments/${departmentId}/setleader/${userId}`,
  'removeUserFromDepartment':
    (departmentId, userId) => `/api/organize/departments/${departmentId}/user/${userId}`,
  
  'getAppRoles':'/api/Organize/Roles/list',//获取应用角色
  'createRole':'/api/Organize/Roles',//添加角色 post
  'updateRole':(roleId) => `/api/Organize/Roles/${roleId}`,//修改角色 put
  'delRole':(roleId) => `/api/Organize/Roles/${roleId}`,//删除角色 delete //不支持批量
  'toggleRole':(roleId) => `/api/Organize/Roles/enabled/${roleId}`,//删除角色 delete //不支持批量

  'grantRoleToUsers':(id) => `/api/application/roles/savemember/${id}`,//应用用户关联 put
  'getUsersOfApp':(appId) => `/api/application/admins/appuser/${appId}`,//获取应用的管理员 get
  'getUsersOfRole':(roleId) => `/api/application/roles/roleuser/${roleId}`,//获取具有该角色的用户
  'grantMenusToRole':(roleId) => `/api/Organize/roles/saveauth/${roleId}`,//角色授权 post
  'getMenusofRole':(roleId) => 
    `/api/application/roles/${roleId}/apps/modules/buttonandcolumns/authorizes`,//获取该角色能够操作的menu

  /*********miss*********/  
  'createVersion':'/api/Versions',
  'getVersionList':'/api/Versions/GetVersionsByAppId',
  'updateVersion':(id) => `/api/Versions/${id}`,
  'deleteVersion':(id) => `/api/Versions/${id}`,
  'toggleVersion':(id) => `/api/Versions/enabled/${id}`,
  'toggleVersionShow':(id, isShow) => `/api/Apps/${id}/${isShow}`,

  'createApi':'/api/ApiInfos',
  'importApis':(id) => `/api/ApiInfos/apidata/${id}`,
  'getApiList':'/api/ApiInfos',
  'updateApi':(id) => `/api/ApiInfos/${id}`,
  'deleteApi':(id) => `/api/ApiInfos/${id}`,
  'toggleEnableApi':(id) => `/enabled/${id}`,

  'createLog':'/api/application/log',
  'getLogList':'/api/application/log',
  'updateLog':(id) => `/api/application/log/${id}`,
  'deleteLog':(id) => `/api/application/log/${id}`,

  'createDeveloper':'/api/application/developer',
  'getDeveloperList':'/api/Authentication',
  'updateDeveloper':(id) => `/api/application/developer/${id}`,
  'deleteDeveloper':(id) => `/api/application/developer/${id}`,

  'createApiCategory':'/api/ApiCategories',
  'getApiCategoryList':(appId) => `/api/ApiCategories/app/${appId}`,
  'updateApiCategory':(id) => `/api/ApiCategories/${id}`,
  'deleteApiCategory':(id) => `/api/ApiCategories/${id}`,

  'createUser':'/api/organize/users',
  'getUserList':'/api/organize/users/getusers',
  'getUserDetail':'/api/organize/users/getuser',
  'updateUser':(userId) => `/api/organize/users/${userId}`,
  'deleteUser':(userId) => `/api/organize/users/${userId}`,
  'toggleUser':(userId) => `/api/organize/users/enable/${userId}`,
  'getRolesOfUser':(userId) => `/api/organize/users/${userId}`,
  'setRolesOfUser':(userId) => `/api/organize/users/${userId}`,
  'resetPassword':(userId) => `/api/organize/users/password/${userId}`,
};