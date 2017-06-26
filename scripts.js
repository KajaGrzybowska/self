//scripts.js - jak używać "self"?

function Button(text){
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>'); // tworzy button (bez tekstu)
        this.$element.text(this.text); // dodaje tekst (zawartość) do buttona
        this.$element.click(function() { // odpowiada za wyświetlenie alertu po kliku
            alert(self.text);
        });
        // this.$element.appendTo($('body')); // wybieramy element i przypinamy go do body
        $('body').append(this.$element); // wybieramy body i przypinamy do niego element,
    }
}

var btn1 = new Button('Hello!');
btn1.create();


// Zgubiony kontekst - this wskaże na obiekt Window, który nie ma właściwości name.

// var person = {
// 	name: "Jan",
// 	sayHello: function() {
// 		console.log("Hello "  + this.name + "!");
//     }
// }
// var hello = person.sayHello;

// Zapobiegamy gubieniu kontenstu: W funkcji sayHello tworzymy zmienną, która będzie trzymać prawidłowy kontekst, na który wskazuje this (obiekt person). W efekcie za każdym razem, kiedy odwołujemy się do zmiennej self, mamy dostęp do właściwego kontekstu i wszystko działa tak, jak powinno.
// var person = {
// 	name: 'Jan',
// 	sayHello: function() {
//     var self = this;
// 	setTimeout(function(){
// 		console.log('Hello '  + self.name + '!');
//         }, 1000)
//     }
// };
// person.sayHello() // Hello Jan!