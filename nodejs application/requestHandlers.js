
var neo4j = require("neo4j-driver").v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "250daowohao"));
var session = driver.session();


function cypherMergeStart(postData,request,response){

    // The postData is a string of JSON. 
    var JsonObj = JSON.parse(postData); //JSON.Parse(str) can parse the string to JSON object. So then we can use the data in the Json like: JsonObj.title.....
    var title = JsonObj.title; //Fetch the data we need from Json.


    response.writeHead(200,{"Content-Type":"text/plain"}); //因为我们返回给客户端的数据为string. 所以数据头要写成 "text/plain"

    

    console.log(postData+" "+typeof postData);
    console.log("The title is "+title);  //??? Here are some problems, the front side can not be rendered. 

    //Define the response data to the client side. The data is from Neo4j match. 
    

   var dataArray =[];
   var dataString ='';
   var responseDataString = {};

   //Process the data from client side ajax call. 
    session
      .run(" MERGE (n:Movie { title:{titleParam}  }) ",{titleParam:title} )
      .then(function(){
         return session.run( "MATCH (m:Movie)   RETURN m.title AS ti" )
      })
      .then(function(result){
        for(var i in result.records){
          dataArray.push(  result.records[i].get("ti") ); //Push the single data into dataArray
          console.log(result.records[i].get("ti") +"The datatype is "+ typeof result.records[i].get("ti") )
        }; 

        console.log(dataArray);
        dataString = dataArray.join(' ');//Swtich the array to string, with connect symbol " " --> <space>
        responseDataString = JSON.stringify({"title":dataString});//Transfer the Json data to its string format.

        session.close();
        driver.close();

        response.write(responseDataString,function(err){
          response.end();
        }); 

      });


    console.log("dataString is "+dataString); //运行顺序是什么。 为什么会提前到dataArray赋值后面。为什么不能按照code顺序执行。


};



function notFound(response){

    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 NOT FOUND"); // Show in front page when receive http request. 
    response.end();

    console.log("404 NOT FOUND");

    //add cypher statement. 
}


exports.cypherMergeStart = cypherMergeStart;
exports.notFound = notFound;

