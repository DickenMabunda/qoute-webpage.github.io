let btn = document.querySelector('.btn');

let qoute = document.querySelector('.qoutes');

let person = document.querySelector('.person');

const qoutes = [{
    qoute:"\"The greates glory in living lies not in never falling, but in rising every time we fall\"",

    person:'Nelson Mandela'
},

{
    qoute:"\"The way to get started is to quite talking and begin doing\"",

    person:'Walt Disney'
},

{
    qoute:"\"Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma -which is living with the results of other people's thinking\"",

    person:'Steve Jobs'
},

{
    qoute:"\"If life were predictable it would cease to be life, and be without flavor\"",

    person:'Eleanor Roosevelt'
},

{
    qoute:"\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success\"",

    person:'James Cameron'
},

{
    qoute:"\"Life is what happens when you're busy making other plans\"",

    person:'John Lennon'
},

{
    qoute:"\"Spread love everywhere you go. Let no one ever come to you without leaving happier\"",

    person:'Mother Teresa'
},

{
    qoute:"\"When you reach the end of the rope, tie a knot in it and hang on\"",

    person:'Franklin Roosevelt'
},

{
    qoute:"\"Always remember that you are absolutely unique. Just like everyone else.\"",

    person:'Margaret Mead'
},

{
    qoute:"\"Don't judge each day by the harvest you reap but by the seeds that you plant\"",

    person:'Robert Louis Stevenson'
}
]

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
});

