# microservice-node-common

## To create a npm package account

email: rmc3408@protonmail.com  
username: rmc3408.dev  
organizationName: @rmc3408  
Password: save in protonPass  


1. Create a new github repo, `npm init` and publish using:  
```
npm adduser
npm public --access public
```

2. convert from .ts -> .js using compiler via tsconfig, outDir = ./build  
`tsc --init`

3. Install necessary packages  
`npm install typescript del-cli --save-dev`

4. update the `package.json` content properties:  
  - `main` is first file to run via import package  
  - `types` is file definition  
  - `files` are all folder to be installed

5. patch to new version
`npm version patch`

6. To remove from npm Js
`npm unpublish @rmc3408/microservice-node-common@0.0.10`

