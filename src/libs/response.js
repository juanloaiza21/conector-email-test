class Response {
    constructor(host,route) {
        this.info = {
            urlServices: host,
            path: route,
        }
        this.errors = []
        this.result = {}
    }
  
    setterStatus(status){
        this.info.status = status
    }
  
    getterStatus(){
        return this.info.status
    }
  
    setterResult(data){
        this.result =(data);
    }
  
  
    setterError(error){
        this.errors.push(error);
    }
  
    getterErrors() { 
        return this.errors
    }
  
    setterLink(data){
        this.link(data);
    }
  
    getterLink(){
        return this.link
    }
  
    answer(){
        let info =  this.info;
        let result = this.result;
        let errors = this.errors;
        let object = {}
        if (errors.length > 0) {
            object = {
                info,
                errors
            }
        
        }else{
            object = {
                info,
                result
            }
        }
        return object
    }
  }
  
  module.exports = {
    Response
  };