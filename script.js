//Create a request instance (with the service)
var req = new XMLHttpRequest();
//initate a connection / or create a connection
//     getting the 
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function
//this function will be triggered only when the data has veen received successfully;

req.onload=function(){
      //whenever the server response the data the function will be run  
    var data=this.response;
    //conversion of the string to json format(JSON.parse)
    var data=JSON.parse(this.response);

    for(var i in data)
    {
    
      console.log(data [i].name);
    
    }
    console.log(data);
}