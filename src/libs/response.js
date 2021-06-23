class Response {
    constructor(host,route) {
        this.info = {
            urlServices: host,
            path: route,
        }
        this.error 
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
        this.error= error;
    }
  
    getterErrors() { 
        return this.error
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
        let error = this.error;
        let object = {}
        if (error) {
            object = {
                info,
                error
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