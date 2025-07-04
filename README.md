# SafetyNet

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm
- Firebase project (for authentication and Firestore)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/safetynet.git
   cd safetynet
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your Firebase credentials and other secrets.

4. **Run the development server:**
   ```sh
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run start` — Start the production server
- `npm run lint` — Lint the codebase

## Environment Variables

Create a `.env` file in the root with the following (example):

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

**Never commit your real `.env` file to version control.**

## Deployment

You can deploy SafetyNet to Vercel, Netlify, or any platform that supports Next.js.  
For Firebase hosting, use the provided `firebase.json` and follow Firebase deployment instructions.

## License

[MIT](LICENSE) (or your chosen license)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)#   s a f e t y n e t  
 