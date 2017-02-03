
var neo4j = require("neo4j-driver").v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "250daowohao"));
var session = driver.session();
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');


function cypherMergeStart(postData,request,response){

    // The postData is a string of JSON. 
    var JsonObj = JSON.parse(postData); //JSON.Parse(str) can parse the string to JSON object. So then we can use the data in the Json like: JsonObj.title.....
    var name = JsonObj.Name; //Fetch the data we need from Json.
    var iD = JsonObj.ID;
    var material = JsonObj.Material;
    var load = JsonObj.Load;
    var design = JsonObj.Design;

    response.writeHead(200,{"Content-Type":"text/plain"}); //因为我们返回给客户端的数据为string. 所以数据头要写成 "text/plain"

    console.log(postData+" "+ name+typeof postData);
    //console.log("The title is "+title);  //??? Here are some problems, the front side can not be rendered. 
    //Define the response data to the client side. The data is from Neo4j match. 
    
   var dataArray =[]; //Define a array
   var dataString =''; //Define a string
   var responseDataString = {}; //Define a JSON object

   //Process the data from client side ajax call. 
    session
      .run(" MERGE (n:Student {   Name:{nameParam} ,ID:{iDParam} ,Material:{materialParam} ,Load:{loadParam} ,Design:{designParam}  }) ",{nameParam:name, iDParam:iD, materialParam:material, loadParam:load, designParam:design}  )
      .then(function(){
         return session.run( "MATCH (m:Student)   RETURN m.Name AS ti" )       
      })
      .then(function(result){
        // for(var i in result.records){
        //   dataArray.push(  result.records[i].get("ti") ); //Push the single data into dataArray
        //   console.log(result.records[i].get("ti") +"The datatype is "+ typeof result.records[i].get("ti") )
        // }; 

        // console.log(dataArray);
        // dataString = dataArray.join(' ');//Swtich the array to string, with connect symbol " " --> <space>
        // responseDataString = JSON.stringify({"Name":dataString});//Transfer the Json data to its string format.

        session.close();
        //driver.close();

        //response.end();

        // response.write(responseDataString,function(err){
        //   response.end();
        // }); 
        console.log("Cypher works");

      });
      response.end();
   // console.log("dataString is "+dataString); //运行顺序是什么。 为什么会提前到dataArray赋值后面。为什么不能按照code顺序执行。

};


function upload(postData,request,response)
{

  var form = new formidable.IncomingForm();
  form.uploadDir = "./tmp";
  form.encoding = 'utf-8';
  form.parse(request, function(err, fields, files) 
  {
    response.writeHead(200, {'content-type': 'text/plain'});
    //response.write('received upload:\n\n');
    response.end(util.inspect({fields: fields, files: files}));

 

  });

  return;


}



// Test how to render basic html to the browser.
function test(postData,request,response) {
  console.log("Request handler 'basic' was called.");
  fs.readFile("./front-side/filetest.html", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(file); 
      response.end();
    }
  });
}






function notFound(response){

    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 NOT FOUND"); // Show in front page when receive http request. 
    response.end();

    console.log("404 NOT FOUND");

    //add cypher statement. 
}


exports.cypherMergeStart = cypherMergeStart;
exports.notFound = notFound;
exports.upload = upload;

exports.test = test;


