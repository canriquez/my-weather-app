

export const UnsPlash = (() => {
    async function loadImg(text = 'sunny clouds') {
        const API_KEY = process.env.UNS_API;
        console.log(API_KEY);
        const url = `https://api.unsplash.com/search/photos?query=${text}&orientation=portrait&per_page=20&client_id=${API_KEY}`;
        console.log(`fetching from unesplash with :\n${url}`);
        const divTag = document.querySelector('.image');

        try {
            const unsplashResponse = await fetch(url);
            const unsplashObject = await unsplashResponse.json();
            const rndImageIndex = Math.floor(Math.random() * Math.floor(20));
            console.log(`Unsplash Image indes is :\n${rndImageIndex}`);
            if (unsplashObject.results[rndImageIndex].id !== '') {
                //const imageTag = document.createElement('img');
                //imageTag.src = unsplashObject.results[rndImageIndex].urls.small;
                let unsUrl = unsplashObject.results[rndImageIndex].urls.small;
                //divTag.append(imageTag);
                console.log("Image url is: " + unsUrl)
                divTag.style.backgroundImage = `url(${unsUrl})`;
            }
        } catch (err) {
            console.warn('Something went wrong with Unsplash imaginary :', err);
        }
    };

    return {
        loadImg,
    };
})();

export default UnsPlash;