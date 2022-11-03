# IMS-322 Digital Musueum

## Project Description
This project is a simple web application that allows a user to view a number of informational 3D models 
of famous sculptures made for [IMS 322](https://bulletin.miamioh.edu/courses-instruction/ims/) at Miami University. A user can view the 3D model while also getting a brief history about the piece, the historical
context surrounding it, as well as information about the artist who created it.

The project is built with [Node.js](https://nodejs.org/en/), [React](https://reactjs.org/), [Three Fiber](https://github.com/pmndrs/react-three-fiber), and [Framer Motion](https://www.framer.com/motion/).

## NPM Commands
All commands that can be run from the npm command line are listed below.

- `npm start`: Starts the application
- `npm run lint`: Lints the code. *I.e., checks for errors and warnings.
- `npm run lint-fext`: Lints the code with the --fix flag to automatically fix errors and warnings.
- `npm run deploy`: Deploys the application to the Heroku server.

## Helper Script
To add models, there is a nice little helper script that will take a GLB 3D model and optimize it for web usage.

- `./optimize.sh <a .glb file>`: Optimizes a glb file by removing unused meshes and compressing the textures.
