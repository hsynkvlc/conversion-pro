# ConversionPro

A Shopify app for advanced conversion tracking and analytics, built with React, TypeScript, and Vite.

## Features

- Google Analytics 4 (GA4) integration
- Google Tag Manager (GTM) support
- Event mapping for Shopify events (purchase, add to cart, etc.)
- Dashboard and analytics
- Modern UI with Tailwind CSS and Polaris

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm
- Shopify Partner account (for app registration)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hsynkvlc/conversion-pro.git
   cd conversion-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your Shopify app credentials in `shopify.app.toml`.

### Development

Start the local development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

### Deploy

1. Deploy the contents of the `dist` folder to your preferred hosting provider (Vercel, Netlify, etc.).
2. Update your Shopify app settings with the public URL of your deployed app.

### Connect to Shopify

- Register your app in the Shopify Partner Dashboard.
- Set the app URL and redirect URLs to match your deployment.
- Install the app on your development store for testing.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Repository:** [https://github.com/hsynkvlc/conversion-pro](https://github.com/hsynkvlc/conversion-pro) 