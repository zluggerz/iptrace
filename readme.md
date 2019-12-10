# iptrace

## CLI tool to quickly geolocate IP addresses
Built with Node JS, [yargs](https://yargs.js.org/), and [cli-table](https://www.npmjs.com/package/cli-table).

### Requirements
1. Install [Node.JS](https://nodejs.org/en/download/). I highly recommend using [NVM](https://github.com/nvm-sh/nvm) on GNU/Linux.
2. Get an API key from [ipgeolocation.io](https://ipgeolocation.io/). It's free for up to 30,000 requests per month.
3. Download/clone this repo to your desired location and enter it.
4. Open ```bin/index.js``` and replace ```Your_API_Key``` with the key you got in step 2.
5. Open a terminal/cmd/Powershell, navigate to this directory, and type ```npm install -g .```

### Usage

```iptrace [ip]```