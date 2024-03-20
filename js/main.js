




var Name = document.getElementById( "Name" )
var Url = document.getElementById( "Url" )




var marketList = [];


if (localStorage.getItem('products')!=null) {
    marketList = JSON.parse( localStorage.getItem( 'products' ) );
    displayData(marketList)
}
function adding() {
   
    if (validationName() ==true && validationUrl() ==true)
    {
        var product = {
        
        name: Name.value,
        Url: Url.value
        
    }
    marketList.push( product )
    localStorage.setItem("products",JSON.stringify(marketList) )


    


    clearing();


    displayData();

    

    console.log(marketList);
   }
}
function clearing() {
    Name.value = "";
    Url.value = "";
    
}

 
function displayData() {
    var cartona = "";

    for ( var i =0 ; i<marketList.length ;i++ )
    {
        cartona +=`<tr>
        <td> ${i}</td>

        
            <td> ${marketList[i].name}</td>
            
            <td><a class="link-underline-light btn btn-warning" href= "${marketList[i].Url}" target="_blank ><button class="btn btn-warning"><i class="fa-solid fa-eye"></i>visit</button></a>
</td>

                <td><button onclick="deleteProduct(${i});" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>delete</button></td>

        </tr>`
    }
    // console.log(cartona);
    document.getElementById( "Table" ).innerHTML = cartona;
}
function deleteProduct(index) {
    marketList.splice( index, 1 );
        localStorage.setItem("products",JSON.stringify(marketList) )

    displayData( marketList );
}
var nameMassage =document.getElementById('nameMassage')
function validationName ()
{
    
    var text = Name.value
        var regex = /^\w{3,}(\s+\w+)*$/;

if (regex.test(text))  {
    Name.classList.add( 'is-valid' )
    Name.classList.remove( 'is-invalid' )
        nameMassage.classList.add('d-none')

    return true


    }
else
{
    Name.classList.add( 'is-invalid' )
    Name.classList.remove( 'is-valid' )
    nameMassage.classList.remove('d-none')
    return false

    }
}
function validationUrl ()
{
    
    var text = Url.value
        var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

if (regex.test(text))  {
    Url.classList.add( 'is-valid' )
    Url.classList.remove( 'is-invalid' )
        UrlMassage.classList.add('d-none')

    return true


    }
else
{
    Url.classList.add( 'is-invalid' )
    Url.classList.remove( 'is-valid' )
    UrlMassage.classList.remove('d-none')
    return false

    }
}

