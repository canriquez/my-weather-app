
import { CloudFlare } from './cloudflare';

export const IpStack = (() => {
  const getMyCity = async () => {
    const API_KEY = process.env.IPSTACK_API;
    console.log('retrieving my city info...');
    console.log('trying to catch my ip - calling getMyIP()');
    const myIp = await CloudFlare.getMyIP();
    if (myIp !== []) {
      try {
        console.log(`from getMyCity(). This is my ip :${myIp[0]}`);
        console.log('attempting fetch for my city...');
        // console.log('attempting with url :' + `http://api.ipstack.com/${myIp}?access_key=${API_KEY}`);
        const response = await fetch(`http://api.ipstack.com/${myIp[0]}?access_key=${API_KEY}`,
          { mode: 'cors' });
        const responseObject = await response.json();

        console.log('my City IP response below');
        console.log(responseObject);
        console.log(responseObject.ip);
        console.log(responseObject.country_name);
        console.log(responseObject.latitude);
        console.log(responseObject.longitude);
        console.log(responseObject.location.country_flag_emoji);
        console.log(responseObject.location.languages[0].code);
        console.log(responseObject.location.languages[0].name);
        return responseObject;
      } catch (err) {
        console.warn('Something went wrong with ipstack :', err);
        return err;
      }
    } else {
      return false;
    }
  };
  return {
    getMyCity,
  };
})();

export default IpStack;