# Client Testimonials – Detail Page (archived)

This folder is **not imported anywhere**. It keeps the version of the
Resources > Client Testimonials tab where clicking a card opened its own page at
`/client-testimonials/[slug]` (title, video, description, related testimonials),
laid out like the news detail page.

The live tab now opens the video in a popup (`VideoPopup`) instead.

## Files

| File | What it is |
| --- | --- |
| `route/client-testimonials/[slug]/page.jsx` | The detail page route (metadata, 404 for unknown slugs). |
| `route/client-testimonials/[slug]/components/CTHero.jsx` | Breadcrumb, title and video. |
| `route/client-testimonials/[slug]/components/CTContent.jsx` | Description and related testimonials. |
| `TestimonialCardWithLink.jsx` | Card that links to the detail page. |
| `TestimonialTabContentWithLink.jsx` | Tab content (with Sector dropdown) without the popup. |
| `testimonialUtilsWithDetailPage.js` | Shared helpers including the detail-page ones (`getTestimonialUrl`, `getVideoEmbedUrl`, `descriptionHtml`, `slug`). |

## How to bring the detail page back

1. Copy the `route/client-testimonials` folder to `src/app/(routes)/client-testimonials`.
2. Copy these files into `components/resources/ClientTestimonials/`, replacing the current ones:
   - `TestimonialCardWithLink.jsx` → `TestimonialCard.jsx`
   - `TestimonialTabContentWithLink.jsx` → `TestimonialTabContent.jsx`
   - `testimonialUtilsWithDetailPage.js` → `testimonialUtils.js`
3. In the copied files, change the imports back:
   - `./TestimonialCardWithLink` → `./TestimonialCard`
   - `./testimonialUtilsWithDetailPage` → `./testimonialUtils`
4. Sector badge on the cards: this snapshot still shows "Client Testimonial" in the
   badge. To keep the sector name, copy the badge line from the live `TestimonialCard.jsx`.
