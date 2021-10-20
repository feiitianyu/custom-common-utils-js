const returnInput = (input) => input;

const getUrlParam = (url, name) => {
  var aParams;
  if(url.indexOf("?")!=-1){
    var searchString=url.split("?")[1];
    if(searchString.indexOf(name+"=")!=-1){
        aParams=searchString.split('&');
        for (i=0; i < aParams.length ; i++){
            if(aParams[i].split('=')[0]==name){
                return aParams[i].split('=')[1];
            }
        }
        return null;
    }
  }
  return null;
}

module.export = {
  returnInput,
  getUrlParam
}
