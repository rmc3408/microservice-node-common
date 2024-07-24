# microservice-node-common

1. Create a npm package account, username and organization name
rmc3408@protonmail.com
rmc3408.dev
@rmc3408

2. Create a new github repo, `npm init` and publish
```
npm adduser
npm public --access public
```

3. Update package json adding new configurations
- run `tsc --init`  
- convert from .ts -> .js using compiler via tsconfig, outDir = ./build  
- install dependencies `npm install typescript del-cli --save-dev`  
- update package.json  
  - `main` is first file to run via import package  
  - `types` is file definition  
  - `files` are all folder to be installed  
- patch to new version `npm version patch`


to remove from npm Js `npm unpublish @rmc3408/microservice-node-common@0.0.10`

