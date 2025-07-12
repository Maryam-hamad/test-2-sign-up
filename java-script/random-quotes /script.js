const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    gradient: "linear-gradient(135deg, #FFB3BA, #BAE1FF)"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    gradient: "linear-gradient(135deg, #FFC8DD, #CDEAC0)"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    gradient: "linear-gradient(135deg, #D7BAFF, #BAFFC9)"
  },
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    gradient: "linear-gradient(135deg, #FFFFBA, #FFDFBA)"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    gradient: "linear-gradient(135deg, #BAFFC9, #F1F0C0)"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    gradient: "linear-gradient(135deg, #BAE1FF, #F7DAD9)"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
    gradient: "linear-gradient(135deg, #FEE1E8, #E2F0CB)"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    gradient: "linear-gradient(135deg, #FAD6A5, #B5EAD7)"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    gradient: "linear-gradient(135deg, #D0F4DE, #D9D7F1)"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    gradient: "linear-gradient(135deg, #F7DAD9, #D7BAFF)"
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
    gradient: "linear-gradient(135deg, #FFDAC1, #C4FAF8)"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    gradient: "linear-gradient(135deg, #F8EDD1, #BAE1FF)"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    gradient: "linear-gradient(135deg, #FAD6A5, #FFC8DD)"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
    gradient: "linear-gradient(135deg, #CDEAC0, #E0BBE4)"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
    gradient: "linear-gradient(135deg, #D0F4DE, #FFFFBA)"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    gradient: "linear-gradient(135deg, #BAFFC9, #FEE1E8)"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    gradient: "linear-gradient(135deg, #D9D7F1, #F1F0C0)"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    gradient: "linear-gradient(135deg, #BAE1FF, #FFB3BA)"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    gradient: "linear-gradient(135deg, #E2F0CB, #FAD6A5)"
  }
];
  

const background=document.getElementById('quotesContainer')  
const quoteC=document.getElementById('quote');
const authorC=document.getElementById('author');
const buttonC=document.getElementById('button');

buttonC.addEventListener('click' ,()=>{
  const quoteindex=Math.floor(Math.random()*quotes.length);
  const randomQuote=quotes[quoteindex]

  quoteC.textContent=randomQuote.quote;
  authorC.textContent=randomQuote.author;
  background.style.background=randomQuote.gradient;

} )

