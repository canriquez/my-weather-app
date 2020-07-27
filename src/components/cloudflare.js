
export const CloudFlare = (() => {
  const getMyIP = async () => {
    const ipRegexp = /(?=ip=)ip=(\d+[.]\d+[.]\d+[.]\d+)/g;
    const ccRegex = /(?=loc)loc=(\w+)\n/g;
    console.log('getting into my IP fetch...');
    try {
      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace',
        { mode: 'cors' });
      const responseText = await response.text();
      console.log(responseText);
      const myIp = responseText.match(ipRegexp)[0].replace(/\n|\r/g, '');
      const myCc = responseText.match(ccRegex)[0].replace(/\n|\r/g, '');
      if (myIp && myCc) {
        console.log([myIp.split('ip=').join(''), myCc.split('loc=').join('')]);

        return [myIp.split('ip=').join(''), myCc.split('loc=').join('')];
      }
      console.log(myIp);
      return [];
    } catch (err) {
      console.warn('Something went wrong with cloudflare :', err);
      return err;
    }
  };
  return {
    getMyIP,
  };
})();

export default CloudFlare;