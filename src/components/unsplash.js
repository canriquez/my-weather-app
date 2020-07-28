
export const UnsPlash = (() => {
  async function loadImg(text = 'sunny clouds') {
    let creditsInfo = {};
    const API_KEY = process.env.UNS_API;
    const url = `https://api.unsplash.com/search/photos?query=${text}&orientation=portrait&per_page=20&client_id=${API_KEY}`;
    const divTag = document.querySelector('.image');

    try {
      const unsplashResponse = await fetch(url);
      const unsplashObject = await unsplashResponse.json();
      const rndImageIndex = Math.floor(Math.random() * Math.floor(20));
      if (unsplashObject.results[rndImageIndex].id !== '') {
        const unsUrl = unsplashObject.results[rndImageIndex].urls.small;
        creditsInfo = unsplashObject.results[rndImageIndex];
        divTag.style.backgroundImage = `url(${unsUrl})`;
      }
    } catch (err) {
      throw ('Something went wrong with Unsplash imaginary :', err);
    }
    return creditsInfo;
  }

  return {
    loadImg,
  };
})();

export default UnsPlash;