# NurByte Portfolio Website

Official portfolio of Robert Michalski (NurByte) — Software Engineer & Photographer.

This Next.js 13 app showcases software projects and photography, featuring a custom toast notification system for user feedback.

---

## Features

- Built with Next.js 13 (App Router) & TypeScript
- Responsive UI styled with Tailwind CSS and Google Fonts
- Custom Toast Notifications (success, error, info) with animations
- SEO optimized with metadata & Open Graph support
- Contact form with interactive toast alerts

---

## Technologies

- Next.js 13
- React & TypeScript
- Tailwind CSS
- SASS
- Node.js
- React Context API for toast notifications

---

## Toast Notifications Usage

Wrap your app in `ToastProvider`:

```tsx
import { ToastProvider } from "./providers/toast-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <ToastSetter />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
```
