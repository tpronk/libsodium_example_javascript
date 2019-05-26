# Example of libsodium in JavaScript 
The scripts in this repo show how to:
* generate a public and secret key
* encrypt a sealed box via a public key
* decrypt a sealed box via a secret key

For portability, all keys and encrypted data are stored in base64.

# How to use it
The dist directory contains a pre-built bundle and a web-page via which you can run the example.

# How to install it
* Install Node and NPM
* Clone this repo
* Open a command prompt
* Navigate to the directory where you cloned this repo
* Enter: **npm install**

# How to build it
* Install Node and NPM
* Clone this repo
* Open a command prompt
* Navigate to the directory where you cloned this repo
* Enter: **npm run build**

# Required modules
* [tweetnacl-js](https://github.com/dchest/tweetnacl-js)
* [tweetnacl-sealedbox-js](https://github.com/whs/tweetnacl-sealed-box)
* [tweetnac-util-s](https://github.com/dchest/tweetnacl-util-js)