
var neo4j = require("neo4j-driver").v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "250daowohao"));
var session = driver.session();


function cypherMergeStart(postData,request,response){

    // The postData is a string of JSON. 
    var JsonObj = JSON.parse(postData); //JSON.Parse(str) can parse the string to JSON object. So then we can use the data in the Json like: JsonObj.title.....

    var title = JsonObj.title;


    response.writeHead(200,{"Content-Type":"text/plain"});

    response.write("Server works"); // Show in front page when receive http request. 
    console.log(postData+" "+typeof postData);
    console.log("The title is "+title);  //??? Here are some problems, the front side can not be rendered. 

    
    session
      .run(" MERGE (n:Movie { title:{titleParam}  }) RETURN n.title",{titleParam:title} )
      .then(function(result){
        console.log(n.title);
        session.close();
        driver.close();

      });


    response.end();


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

