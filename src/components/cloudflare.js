
export const CloudFlare = (() => {
  const getMyIP = async () => {
    const ipRegexp = /(?=ip=)ip=(\d+[.]\d+[.]\d+[.]\d+)/g;
    const ccRegex = /(?=loc)loc=(\w+)\n/g;
    try {
      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace',
        { mode: 'cors' });
      const responseText = await response.text();
      const myIp = responseText.match(ipRegexp)[0].replace(/\n|\r/g, '');
      const myCc = responseText.match(ccRegex)[0].replace(/\n|\r/g, '');
      if (myIp && myCc) {
        return [myIp.split('ip=').join(''), myCc.split('loc=').join('')];
      }
      return [];
    } catch (err) {
      throw ('Something went wrong with cloudflare :', err);
    }
  };
  return {
    getMyIP,
  };
})();

export default CloudFlare;