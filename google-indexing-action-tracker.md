# HUANTIVE Google Indexing Action Tracker

Generated: 2026-10-14
Site: https://www.huantive.com

## Important limitation

Google Search Console URL Inspection and Request Indexing require a verified Search Console owner or full user. This workspace has no authenticated GSC session, so the manual GSC submission step must be completed inside your Google Search Console account. The technical checks and code fixes below were completed before preparing this submission list.

Google states that recrawling may take from a few days to a few weeks, and repeated requests for the same URL do not make crawling faster.

Sources:
- Google Search Central: Ask Google to recrawl your URLs — https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google Search Central: Sitemaps overview — https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central: Robots.txt specification — https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
- Google Search Central: Consolidate duplicate URLs — https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## Completed technical checks and fixes

| Area | Result | Action taken |
|---|---|---|
| sitemap.xml | Available at `/sitemap.xml`; includes homepage, product index, categories, 22 product pages and blog URLs | Verified live sitemap output |
| robots.txt | Allows crawling and points to sitemap | Verified live robots output |
| canonical | Product and blog templates use canonical alternates | Verified code templates |
| noindex | No intentional noindex found in product/blog templates checked | No change needed |
| structured data | Product pages include Product, FAQ and Breadcrumb JSON-LD; blog pages include Article, FAQ and Breadcrumb JSON-LD | Verified code templates |
| server access | Key pages and fixed images return HTTP 200 | Verified live URLs |
| image quality blocker | Some product/blog image references still pointed to old extensions after image-format cleanup | Fixed old `.jpg` references to `.webp` where actual file format is WebP |
| build | Passed `npm run typecheck` and `npm run build` | Build generated 64 static pages successfully |

## Priority URL submission queue

Use this order in Google Search Console URL Inspection. For each URL: inspect URL -> Test Live URL -> confirm URL is available to Google -> Request Indexing.

### P0 — newly published English SEO/GEO articles

These are the most important to submit first because they are new or recently changed and support procurement-intent search traffic.

| Priority | URL | Type | Current action | GSC submission status | Potential non-index reason to watch | Follow-up check |
|---|---|---|---|---|---|---|
| P0 | https://www.huantive.com/blog/shiatsu-neck-shoulder-massager-manufacturer-oem-guide | English SEO article | Submit via URL Inspection | Pending manual GSC submission | New URL; Google has not crawled yet; weak internal discovery if not crawled from sitemap | Check in 3 days, then 7 days |
| P0 | https://www.huantive.com/blog/mini-hot-cold-massage-gun-oem-manufacturer | English SEO article | Submit via URL Inspection | Pending manual GSC submission | New URL; possible quality comparison against similar massage-gun pages | Check in 3 days, then 7 days |
| P0 | https://www.huantive.com/blog/air-compression-leg-massager-oem-supplier-guide | English SEO article | Submit via URL Inspection | Pending manual GSC submission | New URL; needs clear internal links from leg massager category/product pages | Check in 3 days, then 7 days |
| P0 | https://www.huantive.com/blog/neck-shoulder-massager-oem-factory-huantive | GEO article | Submit via URL Inspection | Pending manual GSC submission | Similar topic to SEO neck article; ensure unique positioning as factory capability page | Check in 3 days, then 7 days |
| P0 | https://www.huantive.com/blog/massage-gun-oem-manufacturer-huantive | GEO article | Submit via URL Inspection | Pending manual GSC submission | Similar topic to massage gun SEO article; ensure unique factory/OEM intent | Check in 3 days, then 7 days |
| P0 | https://www.huantive.com/blog/air-compression-leg-massager-oem-factory-huantive | GEO article | Submit via URL Inspection | Pending manual GSC submission | Similar topic to leg massager SEO guide; check canonical is self-referencing | Check in 3 days, then 7 days |

### P1 — money pages and category hubs

These pages should be submitted after the P0 content because they are commercial landing pages and help Google understand product-category relationships.

| Priority | URL | Type | Current action | GSC submission status | Potential non-index reason to watch | Follow-up check |
|---|---|---|---|---|---|---|
| P1 | https://www.huantive.com/products | Product index | Submit via URL Inspection | Pending manual GSC submission | Thin listing page or delayed crawl | Check in 7 days |
| P1 | https://www.huantive.com/products/category/massage-guns | Category page | Submit via URL Inspection | Pending manual GSC submission | Image/asset quality, duplicate wording across categories | Check in 7 days |
| P1 | https://www.huantive.com/products/category/neck-shoulder-massagers | Category page | Submit via URL Inspection | Pending manual GSC submission | Duplicate topic overlap with blog pages | Check in 7 days |
| P1 | https://www.huantive.com/products/category/leg-massagers | Category page | Submit via URL Inspection | Pending manual GSC submission | Recently fixed image reference; confirm live render in URL Inspection | Check in 7 days |
| P1 | https://www.huantive.com/products/hot-cold-massage-gun | Product page | Submit via URL Inspection | Pending manual GSC submission | Previously had thumbnail display issue; now fixed | Check in 7 days |
| P1 | https://www.huantive.com/products/shiatsu-neck-shoulder-massager | Product page | Submit via URL Inspection | Pending manual GSC submission | Page quality and unique specs should be checked in GSC live test | Check in 7 days |
| P1 | https://www.huantive.com/products/air-compression-leg-massager | Product page | Submit via URL Inspection | Pending manual GSC submission | Confirm internal links from new article and category | Check in 7 days |

### P2 — supporting trust and conversion pages

Submit these if GSC shows they are Discovered - currently not indexed or Crawled - currently not indexed.

| Priority | URL | Type | Current action | GSC submission status | Potential non-index reason to watch | Follow-up check |
|---|---|---|---|---|---|---|
| P2 | https://www.huantive.com/oem-odm | OEM/ODM page | Submit if not indexed | Pending GSC check | May need stronger links from articles and product pages | Check in 14 days |
| P2 | https://www.huantive.com/our-story | Trust page | Submit if not indexed | Pending GSC check | May be lower commercial/search demand but useful for E-E-A-T | Check in 14 days |
| P2 | https://www.huantive.com/contact | Contact/RFQ page | Submit if not indexed | Pending GSC check | Utility page; indexing less critical but supports brand trust | Check in 14 days |

## Manual GSC workflow

1. Open Google Search Console property for `https://www.huantive.com/`.
2. Go to URL Inspection.
3. Paste one URL from the P0 list.
4. Click `Test Live URL`.
5. Confirm:
   - Page fetch: Successful
   - Indexing allowed: Yes
   - User-declared canonical: same URL
   - Google-selected canonical: same URL or blank if not crawled yet
   - No robots.txt block
   - No noindex
   - Page is mobile usable or no critical mobile issue
6. Click `Request Indexing`.
7. Record status in the table below.
8. Do not repeatedly submit the same URL within the same day.

## Submission log template

| Date | URL | GSC live test result | Request Indexing result | Not indexed reason shown by GSC | Action taken | Next review date |
|---|---|---|---|---|---|---|
| 2026-10-14 |  |  |  |  |  | 2026-10-17 |

## Ongoing tracking metrics

Track these in GSC weekly:

| Report | Metric | Success signal |
|---|---|---|
| Indexing / Pages | Indexed count | Increasing indexed URL count for product and blog pages |
| Indexing / Pages | Discovered - currently not indexed | Decreasing count for submitted high-priority URLs |
| Indexing / Pages | Crawled - currently not indexed | Decreasing count after quality/internal-link fixes |
| Sitemaps | Discovered URLs | Sitemap accepted and URL count matches site routes |
| Performance / Search results | Impressions | New article URLs begin receiving impressions |
| Performance / Search results | Queries | Procurement/OEM/wholesale query coverage appears |
| Performance / Search results | CTR | Low CTR pages get title/meta rewrites |
| Performance / Search results | Average position | Pages move from unranked to visible positions |

## If URLs remain unindexed after review

Use the GSC reason to choose the next action:

| GSC reason | Likely meaning | Compliant action |
|---|---|---|
| Discovered - currently not indexed | Google knows the URL but has not crawled it yet | Improve internal links, keep sitemap current, request indexing once, wait |
| Crawled - currently not indexed | Google crawled but chose not to index | Improve uniqueness, buyer value, specs, FAQ, internal links and external validation |
| Duplicate, Google chose different canonical | Canonical/content overlap issue | Strengthen self-canonical, differentiate page intent, reduce near-duplicate sections |
| Alternate page with proper canonical tag | Usually expected for duplicate variants | No action unless the canonical is wrong |
| Blocked by robots.txt | Crawling blocked | Fix robots rules and retest live URL |
| Excluded by noindex | Page explicitly noindexed | Remove noindex only if page should be indexed |
| Soft 404 | Page appears low-value or empty | Add substantial unique content and clear page purpose |

## Policy boundary

Do not use black-hat or fake indexing methods such as mass ping spam, fake traffic, doorway pages, cloaking, scraped duplicate pages, link schemes, automated repeated submission, or hidden content. Indexing can be accelerated by crawlability, internal links, sitemap hygiene and content quality, but Google does not guarantee immediate indexing.
