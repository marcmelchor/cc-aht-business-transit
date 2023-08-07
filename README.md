# AHT CODE CHALLENGE - API `BUSINESS-TRANSIT`

## Description

In the [EtLT](https://www.integrate.io/blog/what-is-etlt/) Process Flow, this will be the `Business-Trasnit` where is consumed the `Sink` and `Transform` in the EtL-[DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph).





# AHT CODE CHALLENGE - `Business Transit`

An express application coded on Typescript to being consumed the EtLT Process and consume by the clients.


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
    - [API Business Transit](#api-business-transit)
    - [API Customer](#api-customer)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Project Overview

The `cc-aht-business-transit` is isolated from [EtLT](https://www.integrate.io/blog/what-is-etlt/), so this consumes this app and the customers consume it.
Following the [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) graph theory.


## Features

- ### API API Business Transit
  Is the Business Layer that hit the DWH.

- ### API Customer
  Is the public api where consumes the DWH.


## Installation

Follow this steps to get `cc-aht-business-transit` up and running:

1. Be sure to have Node.js and npm installed in your machine.
2. Clone this repository `git clone https://github.com/marcmelchor/cc-aht-business-transit.git`
3. Navigate to the project folder: `cd cc-aht-business-transit`
4. Install dependencies: `npm install`
5. Start application: `npm start`


## Usage

Once the application is up and running, you can hit the API on `http://localhost:4002`.

- Get the `DWH (Data Warehouse)` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-dwh-psql`.
- Get the `Transofrm and Sink` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-transform-and-loading`.
- Get the `Source` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-extract/tree/Main`.
- Get the `Producer` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-producer`


## Configuration

By default, all the configuration variables are set, but you can modify them on the `./src/environments/environment.ts`.

```
export const environment = {
  authTransformAndSinkToken: 'QBY!qDAuuGHJ8T@b7uga#yvV^PKRYZWz',
  businessTransitAPI: 'http://localhost:4003/',
  ...
};

```


## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`
3. Make changes and commit: `git commit -am 'Add new feature'`
4. Push the branch: `git push origin feature-new-feature`
5. Open a pull request.


## License

This project is licensed under the <u>[MIT License](https://opensource.org/license/mit/)</u>.


## Contact

For questions or feedback, you can reach me at <u>marc.melchor@outlook.com</u> or follow me on <b>LinkedIn</b> <u>@marc-melchor</u>. 
