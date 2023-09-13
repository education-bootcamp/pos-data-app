const loadIds = ()=>{
    loadCustomerIds();
    loadItemIds();
}
const loadCustomerIds = () => {
    $('#customer-id').empty();

    const firestore = firebase.firestore();
    firestore
        .collection('customers')
        .get()
        .then((records => {
            records.forEach((result) => {
                const option = $('<option></option>').val(result.id).text(result.id);
                $('#customer-id').append(option);
            })
        }))
}
const loadItemIds = () => {
    $('#item-id').empty();

    const firestore = firebase.firestore();
    firestore
        .collection('items')
        .get()
        .then((records => {
            records.forEach((result) => {
                const option = $('<option></option>').val(result.id).text(result.id);
                $('#item-id').append(option);
            })
        }))
}

$('#customer-id').on("change",function (){
    const customerId=$(this).val();
    const firestore = firebase.firestore();
    firestore
        .collection('customers')
        .doc(customerId)
        .get().then((response)=>{
        if (response.exists) {
            const data = response.data();
            $('#name').val(data.name);
            $('#address').val(data.address);
            $('#salary').val(data.salary)
        }
    })
})
$('#item-id').on("change",function (){
    const itemId=$(this).val();
    const firestore = firebase.firestore();
    firestore
        .collection('items')
        .doc(itemId)
        .get().then((response)=>{
        if (response.exists) {
            const data = response.data();
            $('#description').val(data.description);
            $('#unit-price').val(data.unitPrice);
            $('#qty-on-hand').val(data.qtyOnHand)
        }
    })
})

