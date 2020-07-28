
import { CloudFlare } from './cloudflare';

export const FreeGeoIp = (() => {
  const getMyCity = async () => {
    const myIp = await CloudFlare.getMyIP();
    if (myIp !== []) {
      try {
        const response = await fetch(`https://freegeoip.app/json/${myIp[0]}`,
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

export default FreeGeoIp;