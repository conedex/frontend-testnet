# Frontend

## Development

### Prerequisites

1. [Git](https://git-scm.com/)
2. [NodeJS >=12 (>=16 recommended)](https://nodejs.org/en/)
3. [Yarn](https://yarnpkg.com)

### Installation

```bash
git clone https://github.com/conedex/frontend.git
cd frontend
yarn install
```

### Configuring the environment

Create a new file called .env.local in the root of the project folder.

#### POLYGON MUMBAI

Add the following to the empty .env.local file:

```
REACT_APP_CHAIN_ID="80001"
REACT_APP_NETWORK_URL="https://rpc.ankr.com/polygon_mumbai"
```

#### POLYGON

Add the following to the empty .env.local file:

```
REACT_APP_CHAIN_ID="80001"
REACT_APP_NETWORK_URL="https://rpc.ankr.com/polygon_mumbai"
```

### Run

```bash
yarn start
```
