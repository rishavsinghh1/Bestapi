/**All the end urls are present here. */

export var config = {
  auth:{
    login: "auth/login/login",
    registration: "register",
  },
  user:{
    getMyProfile: 'details',
    updateProfile: 'updateProfile',
    getMemberList: 'memberList',
    changePassword: 'changePassword'
  },
  project:{
    addProject: 'addProject',
    getProjectList : 'projectList', //for admin
    getAssignedProjectList : 'assignedProjectList', //for member
  }
  
};