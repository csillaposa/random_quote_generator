//to get the elements we are working with
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//loader
const loader = document.getElementById('loader');

//to set up the quote array for the json object
let apiQuotes = [];

//to show loading we have to show the loader and hide the quote container
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//function to show new quote
function newQuote() {

    //to return a random quote index
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //to check the quote length and apply styling for longer quotes
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //to populate the quote text div with the random quote
    quoteText.textContent = quote.text;

    //to check if author is null
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        //to populate the quote author div with the author's name
        authorText.textContent = quote.author;
    }
}

//to get quotes from API 
//async makes a function return a promise
//promise contains a response object
async function getQuotes() {

    const apiUrl = 'https://type.fit/api/quotes';

    try {
        //await makes a function wait for a response
        const response = await fetch(apiUrl);
        //to populate the empty array with the json object
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //this is where we can handle the error
    }
}

//to tweet a quote: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
function tweetQuote() {

    //template string uses backticks
    //we are using a template string becuse we can pass in a variable
    //? is a query and we are passing in the quote text and author
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    
    //to open the twitter page in a new tab
    window.open(twitterUrl, '_blank');
}

//event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on load
//getQuotes();

//to check loader
loading();