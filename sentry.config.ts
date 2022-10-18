import * as Sentry from '@sentry/gatsby';

Sentry.init({
    dsn: "https://c214503190724086b0b4017d8fe5d65a@o1176005.ingest.sentry.io/6622945",
    sampleRate: 1.0, // Adjust this value in production
});
