function displayValue() { 
    var e = document.getElementsByName('inlineRadioOptions');
    var access
    // var result = e.options[e.selectedIndex].text;
    for(i = 0; i < e.length; i++) { 
        if(e[i].checked)
        window.access = e[i].value  
        // document.getElementById("radioresults").innerHTML
        //         =window.genre; 
    } 
    alert(window.access)
    

      
    
} 


        let ticketbuyers = [];
        const addbuyer = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let ticketbuyer = {
                id: new Date().getTime(),
                studname: document.getElementById('studname').value,
                quantity: document.getElementById('studtic').value,


            }
            ticketbuyers.push(ticketbuyer);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();
            buildTable(ticketbuyers)
            
            
            

            function buildTable(data){
                ticketbuyers = []
                var table = document.getElementById('myTable')
                for (var i = 0; i < data.length; i++){
                    var row = `<tr>
                                    <td>${data[i].id}</td>
                                    <td>${data[i].studname}</td>
                                    <td>${data[i].quantity}</td>
                                    <td>${window.access}</td>
                              </tr>`
                    table.innerHTML += row
        
        
                }
            }


            //Comment out if you need to display JSON in your main HTML
            // console.warn('added' , {movies} );
            // let pre = document.querySelector('#msg pre');
            // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

             


        }
        let data = JSON.stringify(ticketbuyers);  

       
{
    console.log('success');
}
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('submitbtn').addEventListener('click', addbuyer);
        });