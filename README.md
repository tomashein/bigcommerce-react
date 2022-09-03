# BigCommerce/React

### Environment

- Node v14.19.0
- PHP v8.1.9 (with curl extension on)

### Dev Utilities

- Vite v3.0.7
- Eslint v8.23.0
- Prettier v2.7.1
- PostCSS v8.4.16

### Interface Library

- React v18.2.0

### External Libraries

- Classnames v2.3.1

### Styles Strategy

- CSS Variables
- CSS Modules
- Nested CSS (Sass style)
- Autoprefixer

### Browser Support

Modern browsers (not IE).

### Commands

| Command        | Description                      |
| -------------- | -------------------------------- |
| `yarn`         | Install the project dependencies |
| `yarn proxy`   | Start the php proxy server       |
| `yarn dev`     | Start the development server     |
| `yarn build`   | Compiles the production build    |
| `yarn preview` | Previews the production build    |
| `yarn lint`    | Lint source files                |
| `yarn type`    | Typescript check without emiting |

### File/Folder Structure

```
├── public                 # Static files
├── server                 # PHP Proxy files
│   ├── proxy.php          # Proxy script
│   └── setup.php          # Proxy setup
├── src                    # Source files
│   ├── app                # Main entry point
│   ├── assets             # Fonts and images
│   ├── components         # App components
│   ├── context            # Contexts and providers
│   ├── helpers            # Utils and enums
│   ├── hooks              # Custom hooks
│   ├── styles             # Global styles
│   ├── types              # Shared types
│   └── main.tsx           # App bootstrap
├── .env                   # Environment variables
└── index.html             # Html entry point
```

### Environment Variables

| Variable          | Description                      |
| ----------------- | -------------------------------- |
| `VITE_PROXY_URL`  | Url of the php proxy file        |
| `VITE_PROXY_KEY`  | Validation key react-php         |

### PHP Proxy variables

| Variable        | Description                      |
| --------------- | -------------------------------- |
| `$api_url`      | BigCommerce store api url        |
| `$api_key`      | BigCommerce access token         |
| `$app_url`      | React url and port               |
| `$app_key`      | React-Proxy api key              |
