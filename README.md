# HUANTIVE B2B Website

Responsive B2B website for massage and recovery product sourcing, private-label projects, and OEM/ODM inquiries.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run build
npm audit
```

## Deployment

The project is compatible with Vercel and other Node.js hosts supporting Next.js. Set `NEXT_PUBLIC_SITE_URL` to the final canonical domain before production deployment.

The inquiry API currently validates submissions but does not send external email. Configure a transactional email provider and recipient through environment variables before launch.

## Content readiness

Values marked as pending are intentionally not presented as verified facts. Replace concept product images, factory metrics, certifications, contact details, MOQ, specifications, and lead times with approved business assets before public launch.
