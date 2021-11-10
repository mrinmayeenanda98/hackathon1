
document.addEventListener('DOMContentLoaded', () => {
  
   async function fetchData() {
        try {
            var data = await fetch('https://api.openbrewerydb.org/breweries')
            var data1 = await data.json()
            renderBrewery(data1)
            console.log(data1)

            
        } catch (error) {
            console.log(error)
            
        }
     
    }
    //Populate cards with country details
    function renderBrewery(data) {
        for (const q of data) {            
            const breweryUL = document.querySelector('#brewery-list');
            //Create all necessary elements
            const breweryLi = document.createElement('div');           
            const b_type = document.createElement('p');
           
            const b_address = document.createElement('p');
            const b_name = document.createElement('h5');
            const b_phone = document.createElement('p');
            const b_url = document.createElement('p');
         
            //Add appropriate classes and ids. Grab data and insert if needed.
            breweryLi.className = 'card col-10 m-4 div-align';            
            b_type.className = 'mb-0 container' ;
            b_url.className = 'mb-0 container';
            b_phone.className = 'mb-0 container';
            b_address.className = 'mb-0 container';                 
         
            b_type.innerHTML = "Type : " + q.brewery_type.toUpperCase();  
            b_address.innerHTML = "Street : " + q.street.toUpperCase(); 
            b_name.innerHTML = q.name.toUpperCase();     
            b_phone.innerHTML = "Phone : " + q.phone.toUpperCase();  
            b_url.innerHTML = "Website URL : "+ q.website_url;
           
            //Append everything to main container           
            breweryUL.appendChild(breweryLi);
            breweryLi.append(b_name);
          
            breweryLi.append(b_type);
            breweryLi.append(b_address);
            breweryLi.append(b_phone);
            breweryLi.append(b_url);
           
        }
    }
   
    //Call the function that will automatically run renderCountry() also 
    fetchData();
})

