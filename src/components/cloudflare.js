
export const CloudFlare = (() => {
    const getMyIP = async () => {
        const ipObj = { ip: '', loc: '' };
        const ipRegexp = /(?=ip=)ip=(.+)/;
        const ccRegex = /(?=loc)loc=(\w+)\n/g;
        try {
            const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace',
                { mode: 'cors' });
            let responseText = await response.text();
            //esponseText = `fl=97f291\nh=www.cloudflare.com\nip=2001:1284:f019:3dd9:28c6:931d:3e75:3cce\nts=1595961294.527\nvisit_scheme=https\nuag=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36\ncolo=GRU\nhttp=http/2\nloc=BR\ntls=TLSv1.3\nsni=plaintext\nwarp=off\n`;
            let resArr = responseText.split('\n');

            for (let i = 0; i < resArr.length; i += 1) {
                let line = resArr[i].split('=');
                if (line[0] == 'ip') { ipObj.ip = line[1] };
                if (line[0] == 'loc') { ipObj.loc = line[1] };
                console.log(line);

            }
            console.log(ipObj);
            //const myIp = responseText.match(ipRegexp)[0].replace(/\n|\r/g, '');
            //const myCc = responseText.match(ccRegex)[0].replace(/\n|\r/g, '');
            /*            if (myIp && myCc) {
                           return [myIp.split('ip=').join(''), myCc.split('loc=').join('')];
                       } */
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