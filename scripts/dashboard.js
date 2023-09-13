// function Customer(name,address,salary){
//     this.name=name;
//     this.address=address;
//     this.salary=salary;
// }

createCustomer=()=>{
    const tempCustomer = {
       name: $('#name').val(),
       address: $('#address').val(),
       salary: $('#salary').val()
    };
    
    console.log(tempCustomer);

    const database = firebase.firestore();
    database
    .collection('customers')
    .add(tempCustomer)
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });

}