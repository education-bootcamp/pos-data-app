// function Customer(name,address,salary){
//     this.name=name;
//     this.address=address;
//     this.salary=salary;
// }

const createCustomer=()=>{
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

const loadCustomers=()=>{
    const firestore = firebase.firestore();
    firestore
        .collection('customers')
        .get().then((result)=>{
            result.forEach((records)=>{
                const data = records.data();
                const row=`
                <tr>
                    <td>${records.id}</td>
                    <td>${data.name}</td>
                    <td>${data.address}</td>
                    <td>${data.salary}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteData(${records.id})">Delete</button> |
                        <button class="btn btn-success btn-sm" onclick="updateData(${records.id})">Update</button>
                    </td>
                </tr>
                `;
                $('#table-body').append(row);
            })
    })



}

const updateData=(id)=>{

}

const deleteData=(id)=>{

}