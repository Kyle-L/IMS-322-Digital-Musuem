# IMS-322 Digital Musueum

Live URL: [https://ims322.kylelierer.com](https://ims322.kylelierer.com)

# Project Description
This project is a simple web application that allows a user to view a number of informational 3D models 
of famous sculptures. A user can view the 3D model while also getting a brief history about the piece, the historical
context surrounding it, as well as information about the artist who created it.

The project is built with [Node.js](https://nodejs.org/en/), [React](https://reactjs.org/), [Three Fiber](https://github.com/pmndrs/react-three-fiber), and [Framer Motion](https://www.framer.com/motion/).

# NPM Commands
All commands that can be run from the npm command line are listed below.

- `npm start`: Starts the application
- `npm run lint`: Lints the code. *I.e., checks for errors and warnings.
- `npm run lint-fext`: Lints the code with the --fix flag to automatically fix errors and warnings.
- `npm run deploy`: Deploys the application to the Heroku server.

# Scripts
All scripts that be run from the `/scripts` directory are listed below.

- `./deploy.sh`: Deploys the application to the Heroku server.
- `./optimize.sh <a .glb file>`: Optimizes a glb file by removing unused meshes and compressing the textures.
