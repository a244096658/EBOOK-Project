
var requestHandlers = require("./requestHandlers");
var url = require("url");


function route(postData,request,response){

    var pathName = url.parse(request.url).pathname;
    console.log(`The request url is ${pathName}`);

    // 访问不同的地址，call出相应的函数。 pathname不是来访者的ip地址，而是访问的我们的网页地址。 

    if(pathName==="/"){ // Determine the http request url, and reflect them to related requestHandlers function. Test what is the url for the ipad request. 

        requestHandlers.cypherMergeStart(postData,request,response);
   
        console.log("router start-->About to route a request for"+pathName);

    }

    else if(pathName==="/favicon.ico") {
        console.log("favicon.ico")
    }

    else if(pathName === "/upload")
    {
        requestHandlers.upload(postData,request,response);
        console.log("Upload files received");

    }


    else if(pathName === "/test")
    {
        requestHandlers.test(postData,request,response);
        console.log("test page visit");

    }


    else{
        requestHandlers.notFound(response);
        
    };

    
};

exports.route = route;

