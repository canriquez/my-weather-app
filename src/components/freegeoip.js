
import { CloudFlare } from './cloudflare';

export const FreeGeoIp = (() => {
  const getMyCity = async () => {
    let responseObject = { city: 'Santiago del Estero', country_code: 'AR', country_name: 'Argentina' };
    const myIp = await CloudFlare.getMyIP();
    if (myIp.ip !== '') {
      try {
        const response = await fetch(`https://freegeoip.app/json/${myIp.ip}`,
          { mode: 'cors' });
        responseObject = await response.json();
        // Fail Safe - If city retrieve failes, I fall back to my Home Town - Argentina
        if (responseObject.city === '') {
          responseObject = { city: 'Santiago del Estero', country_code: 'AR', country_name: 'Argentina' };
        }
        return responseObject;
      } catch (err) {
        throw ('Something went wrong with ipstack :', err);
      }
    } else {
      return responseObject;
    }
  };
  return {
    getMyCity,
  };
})();

export default FreeGeoIp;