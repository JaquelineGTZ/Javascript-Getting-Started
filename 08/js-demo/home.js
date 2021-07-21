
/*
let mySymbol = Symbol();
let person = {
    name: 'John',
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation'
};
person['age'] = 44;

showMessage(person.age);
*/


/*
let mySymbol = Symbol();
let person = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is '+ realAge);
    }
};

showMessage( typeof person.showInfo );
*/


/*
let message = 'Hello';

function changeMessage(message) { 
    message = 'Hi!';
}

changeMessage(message);

showMessage(message);
*/


/*
let person = {
    name: 'John',
    age: 32,
    partTime: false,
};

function incrementAge(p) {
    p.age++;
}
incrementAge( person );
showMessage(person.age);
*/

//let now = new Date();
//showMessage( now.toDateString() );

/*
let s = 'hello';
showMessage( s.charAt(1) ); 
*/

/*
const header = document.getElementById('message');

header.style.fontWeight = '800';
*/

/*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');

});
*/


const button = document.getElementById('see-review');

button.addEventListener('click', function() {

    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
 
});

