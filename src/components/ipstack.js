
import { CloudFlare } from './cloudflare';

export const IpStack = (() => {
  const getMyCity = async () => {
    const API_KEY = process.env.IPSTACK_API;
    const myIp = await CloudFlare.getMyIP();
    if (myIp !== []) {
      try {
        const response = await fetch(`http://api.ipstack.com/${myIp[0]}?access_key=${API_KEY}`,
          { mode: 'cors' });
        const responseObject = await response.json();

        return responseObject;
      } catch (err) {
        throw ('Something went wrong with ipstack :', err);
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