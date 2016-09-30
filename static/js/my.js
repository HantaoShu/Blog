function form_validate(){
  var username = document.getElementById("username").value;
  var comment = document.getElementById("comment").value;
  var flag = 1;
    var userdiv = document.getElementById("userdiv");
    var usererror = document.getElementById("usererror");
  if(username==null||username== ""){
    if(document.all){
      userdiv.setAttribute("classname","has-error");
    }
    else {
      userdiv.setAttribute("class","has-error");
    }
    usererror.innerHTML="请输入用户名";
    flag = 0;
  }
  else {
    if(document.all){
      userdiv.setAttribute("classname","has-success");
    }
    else {
      userdiv.setAttribute("class","has-success");
    }
    usererror.innerHTML="";
    flag = 0
  }
  var cmdir= document.getElementById("cmdiv");
  var cmerror = document.getElementById("cmerror");
  if(comment==null||comment==""){
    if(document.all){
      cmdir.setAttribute("classname","has-error");
    }
    else {
      cmdir.setAttribute("class","has-error");
    }
    cmerror.innerHTML="请输入评论";
  }
  else{
    if(document.all){
      cmdir.setAttribute("classname","has-success");
    }
    else {
      cmdir.setAttribute("class","has-success");
    }
    cmerror.innerHTML="";
    
  }
  return flag?true:false;
}
