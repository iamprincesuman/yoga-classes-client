function submitForm() {
    console.log("here");
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        batch: document.getElementById('batch').value
    };
    
    let str = 'https://yoga-classes-server-kguw.vercel.app/enroll'
    sendFormData(formData, str);
}

function submitBatchChangeForm() {
    const formData = {
        enrollmentId: document.getElementById('enrollmentId').value,
        newBatch: document.getElementById('newBatch').value
    };
    let str = 'https://yoga-classes-server-kguw.vercel.app/shift-batch/';
    sendFormData(formData, str);
}

function submitMonthlyPaymentForm() {
    const formData = {
        enrollmentId: document.getElementById('enrollmentIdMonthly').value,
        amount: document.getElementById('amount').value
    };
    let str = 'https://yoga-classes-server-kguw.vercel.app/make-payment';
    sendFormData(formData, str);
}

function sendFormData(formData, apiEndpoint) {
    
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        
            alert(JSON.stringify(data.message));
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
