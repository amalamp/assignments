
try{
    function call(){
        // creating xhr object
        var xHttp= new XMLHttpRequest();
        // eventlistner
        xHttp.onreadystatechange= function(){
            // condition
        if(this.readyState==4 && this.status==200){
           var jsonfile= JSON.parse(this.responseText);
        var jsonobject=jsonfile.spec;
        // document.write(jsonobject[0].name)
        // EXTRACT VALUE FOR HTML HEADER. 
                // ('Book ID', 'Book Name', 'Category' and 'Price')
                var col = [];
                for (var i = 0; i < jsonobject.length; i++) {
                    for (var key in jsonobject[i]) {
                        if (col.indexOf(key) == -1) {
                            col.push(key);
                            // console.log(key)
                        }
                    }
                }
        
                 // CREATE DYNAMIC TABLE.
                 var table = document.createElement("table");
        
                 // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
         
                 var tr = table.insertRow(-1);                   // TABLE ROW.
         
                 for (var i = 0; i < col.length; i++) {
                     var th = document.createElement("th");      // TABLE HEADER.
                     th.innerHTML = col[i];
                     tr.appendChild(th);
                    //  console.log(table)
                 }
        
                // ADD JSON DATA TO THE TABLE AS ROWS.
                for (var i = 0; i < jsonobject.length; i++) {
        
                    tr = table.insertRow(-1);
        
                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = jsonobject[i][col[j]];
                    }
                }
        
         // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
         var divContainer = document.getElementById("mytable");
         divContainer.innerHTML = "";
         divContainer.appendChild(table);
        
        }
        }
        xHttp.open("GET","list.json", true);
        xHttp.send();
        
        }
        
}
catch(error){
    console.log(error)
}
 