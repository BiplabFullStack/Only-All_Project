function onsignup(event) {
    event.preventDefault();

    const candyName = event.target.Expense.value;
    const description = event.target.Description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    event.target.reset();

    myObj = {
        candyName,
        description,
        price,
        quantity
    }

    if (candyName && description && price && quantity) {
        axios.post('https://crudcrud.com/api/481bee8a533e41f39a7169e3d55dc20f/ExpenseTrackerNew', myObj)
            .then((resolve) => {
                onScreenFunction(myObj);
                console.log(resolve);
            })
            .catch((err) => {
                console.error(err);
            })
        // onScreenFunction(myObj);
    } else {
        alert('Enter All the things please');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/481bee8a533e41f39a7169e3d55dc20f/ExpenseTrackerNew')
        .then((response) => {
            console.log(response);
            response.data.forEach((element) => {
                onScreenFunction(element)
            })
        })
        .catch((err) => {
            console.error(err)
        })
})

function onScreenFunction(myObj) {
    const ul = document.getElementById('listOnScreen');

    const li = document.createElement('li');
    li.innerHTML = `${myObj.candyName} - ${myObj.description} - ${myObj.price} - ${myObj.quantity} `;

    const buyOneBtn = document.createElement('input');
    buyOneBtn.value = 'BuyOne';
    buyOneBtn.type = 'button';
    
    buyOneBtn.onclick = () => {
        const url = `https://crudcrud.com/api/481bee8a533e41f39a7169e3d55dc20f/ExpenseTrackerNew/${myObj._id}`;
        axios.put(url, {
            candyName:myObj.candyName,
            description : myObj.description,
            price : myObj.price,
            quantity :(myObj.quantity-1)
        })
            .then(() => {
                li.innerHTML = `${myObj.candyName} - ${myObj.description} - ${myObj.price} - ${myObj.quantity -1} `;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const buyTwoBtn = document.createElement('input');
    buyTwoBtn.value = 'BuyTwo';
    buyTwoBtn.type = 'button';
    buyTwoBtn.onclick = () => {
        const url = `https://crudcrud.com/api/481bee8a533e41f39a7169e3d55dc20f/ExpenseTrackerNew/${myObj._id}`;
        axios.put(url, {
            candyName:myObj.candyName,
            description : myObj.description,
            price : myObj.price,
            quantity :(myObj.quantity-2)
        })
            .then(() => {
               // ul.removeChild(li);
               li.innerHTML = `${myObj.candyName} - ${myObj.description} - ${myObj.price } - ${myObj.quantity -2} `;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const buyThreeBtn = document.createElement('input');
    buyThreeBtn.value = 'BuyThree';
    buyThreeBtn.type = 'button';
    buyThreeBtn.onclick = () => {
        const url = `https://crudcrud.com/api/481bee8a533e41f39a7169e3d55dc20f/ExpenseTrackerNew/${myObj._id}`;
        axios.put(url, {
            candyName:myObj.candyName,
            description : myObj.description,
            price : myObj.price,
            quantity :(myObj.quantity-3)
        })
            .then(() => {
               // ul.removeChild(li);
               li.innerHTML = `${myObj.candyName} - ${myObj.description} - ${myObj.price} - ${myObj.quantity -3} `;
            })
            .catch((err) => {
                console.error(err);
            });
    }

   /* const editBtn = document.createElement('input');
    editBtn.value = 'Edit';
    editBtn.type = 'button';
    editBtn.onclick = () => {

        document.getElementById('Expense').value = myObj.expense;
        document.getElementById('Description').value = myObj.description;
        document.getElementById('Category').value = myObj.category;

        axios.delete(`https://crudcrud.com/api/16316292ae434191b82a52c2ba1a7934/ExpenseTrackerNew/${myObj._id}`)
            .then(() => {
                ul.removeChild(li);
            })
            .error((err) => {
                console.error(err);
            })
    };*/

    li.appendChild(buyOneBtn);
    li.appendChild(buyTwoBtn);
    li.appendChild(buyThreeBtn);
    ul.appendChild(li);
}
