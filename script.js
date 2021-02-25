const url = 'https://api.kanye.rest';
const text = document.querySelector('.text')
const firstImage = "https://s.wsj.net/public/resources/images/B3-GJ511_KW8_OR_574V_20200324115212.jpg"
const secondImage = "https://s.abcnews.com/images/Politics/kanye-west_hpMain_20200904-232303_4x3t_992.jpg"
const shareWithTwitter = document.querySelector('.twitter-share-button')
const newQuote = document.querySelector('.new-quote');

// fetch API
const fetchKanye = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let quote = data.quote
        text.innerHTML = quote;
        sharingTweet(quote);
    })
    .catch((err) => {
        console.warn(err)
    })
}

// create link in order to share the quote as a tweet.
function sharingTweet(shared = text.innerHTML) {
    const reg = /\s/g;
    shared = shared.replace(reg, "%20")
    
    shareWithTwitter.href = `https://twitter.com/intent/tweet?text=${shared}`;
    console.log(shareWithTwitter.href)
}

// as we click the image both quote and image are changing.
function changeImage(e) {
    
    let img = e.target.currentSrc;

    newQuote.src = img == firstImage ? secondImage : firstImage;
    
    newQuote.src === secondImage ? fetchKanye() : text.innerHTML = "Let me think."
    
}

shareWithTwitter.addEventListener('click', sharingTweet) 

newQuote.addEventListener('click', changeImage)
