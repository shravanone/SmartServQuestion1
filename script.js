fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
    .then(res=>res.json())
    .then(data=>{
        data = data.products
            var temp = "";
            for (product in data){
                temp += "<tr>"
                temp += "<td>"+data[product].subcategory+"</td>"
                temp += "<td>"+data[product].title+"</td>"
                temp += "<td>"+data[product].price+"</td>"
                temp += "<td>"+data[product].popularity+"</td></tr>"
            }
            document.getElementById("data").innerHTML = temp;
    } 
)
