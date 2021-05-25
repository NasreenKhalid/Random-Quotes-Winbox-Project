const monday = document.getElementById("monday")
const tuesday = document.getElementById("tuesday")
const wednesday = document.getElementById("wednesday")
const thursday = document.getElementById("thursday")
const friday = document.getElementById("friday")
const saturday = document.getElementById("saturday")
const sunday = document.getElementById("sunday")
var quoteContent = document.querySelector("#quote-content");



monday.addEventListener('click',()=>{
     getRandomQuote() 
const mondayBox = new WinBox({
    title: 'Monday Quote',
    width:'400px',
      height:'400px',
      top:50,
      right:50,
      bottom:50,
      left:50,
      class:"text",
      mount: quoteContent,
}) 
})


tuesday.addEventListener('click',()=>{
    getRandomQuote()  
    const tuesdayBox = new WinBox({
        title: 'Tuesday Quote',
        width:'400px',
          height:'400px',
          top:80,
          right:150,
          bottom:50,
          left:250,
          class:"text",
          mount: quoteContent,
    }) 
})
wednesday.addEventListener('click',()=>{
    getRandomQuote()
    const wednesdayBox = new WinBox({
        title: 'Wednesday Quote',
        width:'400px',
          height:'400px',
          top:80,
          right:180,
          bottom:50,
          left:150,
          class:"text",
          mount: quoteContent, 
        }) 
})
thursday.addEventListener('click',()=>{
    getRandomQuote()
    const thursdayBox = new WinBox({
        title: 'Thursday Quote',
        width:'400px',
          height:'400px',
          top:110,
          right:150,
          bottom:150,
          left:230,
          class:"text",
          mount: quoteContent,  
        })
})
friday.addEventListener('click',()=>{
    getRandomQuote() 
    const fridayBox = new WinBox({
        title: 'Friday Quote',
        width:'400px',
          height:'400px',
          top:80,
          right:210,
          bottom:50,
          left:290,
          class:"text",
          mount: quoteContent,
        }) 
})
saturday.addEventListener('click',()=>{
    getRandomQuote() 
    const saturdayBox = new WinBox({
        title: 'Saturday Quote',
        width:'400px',
          height:'400px',
          top:80,
          right:200,
          bottom:50,
          left:320,
          class:"text",
          mount: quoteContent,
        }) 
})
sunday.addEventListener('click',()=>{
    getRandomQuote() 
    const sundayBox = new WinBox({
        title: 'Sunday Quote',
        width:'400px',
          height:'400px',
          top:80,
          right:150,
          bottom:50,
          left:340,
          class:"text",
          mount: quoteContent, 
        })
})


function getRandomQuote(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
     mondayContent.innerHTML = `${data.content}`;
    });
}

