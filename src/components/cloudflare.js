
export const CloudFlare = (() => {
  const getMyIP = async () => {
    const ipObj = { ip: '', loc: '' };
    try {
      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace',
        { mode: 'cors' });
      const responseText = await response.text();
      const resArr = responseText.split('\n');

      for (let i = 0; i < resArr.length; i += 1) {
        const line = resArr[i].split('=');
        // eslint-disable-next-line prefer-destructuring
        if (line[0] === 'ip') { ipObj.ip = line[1]; }
        // eslint-disable-next-line prefer-destructuring
        if (line[0] === 'loc') { ipObj.loc = line[1]; }
      }
      return ipObj;
    } catch (err) {
      throw ('Something went wrong with cloudflare :', err);
    }
  };
  return {
    getMyIP,
  };
})();

export default CloudFlare;