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