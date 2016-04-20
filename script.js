

$(document).ready(function(){
    
    $("#submit").click(function(){
        search();
    });
    
});
    
    function search() {
    var searchuser = document.getElementById("country").value;
     var link= "https://restcountries.eu/rest/v1/name/"+searchuser;
    console.log(searchuser);
     $.ajax({
  url: link,
  context: document.body
}).done(function(response) {
  console.log(response);
  


    
    $("body").append("<li>" + response[0].name +"</li>");
    
    $("body").append( " The population is: "  +  response[0].population );
    
    $("body").append( response[0].translation);
    
 
   
   
for (var i=0; i<response[0].altSpellings.length-1 ;i++){
        
    
    $("body").append("<li>" + response[0].altSpellings[i] + "</li>");

}
});
    
    
}

