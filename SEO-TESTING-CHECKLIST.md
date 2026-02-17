# SEO Testing Checklist
## Photonvolt Energy Website

Use this checklist to verify all SEO implementations are working correctly.

---

## 🔍 1. Sitemap Verification

### Test sitemap.xml accessibility:
- [ ] Visit: https://photonvoltenergy.com/sitemap.xml
- [ ] Verify XML renders correctly in browser
- [ ] Check all 8 URLs are listed
- [ ] Verify lastmod dates are correct

### Submit to Search Engines:
- [ ] Google Search Console: https://search.google.com/search-console
  - Add property → Submit sitemap.xml
- [ ] Bing Webmaster Tools: https://www.bing.com/webmasters
  - Add site → Submit sitemap.xml

---

## 🤖 2. Robots.txt Verification

### Test robots.txt:
- [ ] Visit: https://photonvoltenergy.com/robots.txt
- [ ] Verify file loads correctly
- [ ] Check sitemap reference is present
- [ ] Test in Google Search Console → robots.txt Tester

---

## 👥 3. Humans.txt Verification

### Test humans.txt:
- [ ] Visit: https://photonvoltenergy.com/humans.txt
- [ ] Verify team information is correct
- [ ] Check technology stack is listed

---

## 🤖 4. LLMs.txt Verification

### Test llms.txt:
- [ ] Visit: https://photonvoltenergy.com/llms.txt
- [ ] Verify company information is comprehensive
- [ ] Check all services are listed

---

## 📊 5. Schema Markup Testing

### Test Each Page with Google Rich Results Test:
URL: https://search.google.com/test/rich-results

#### Homepage (index.html):
- [ ] Test URL: https://photonvoltenergy.com/
- [ ] Verify Organization schema detected
- [ ] Verify LocalBusiness schema detected
- [ ] Verify Service schema detected
- [ ] Check for zero errors

#### About Page (about.html):
- [ ] Test URL: https://photonvoltenergy.com/about.html
- [ ] Verify AboutPage schema detected
- [ ] Verify BreadcrumbList schema detected
- [ ] Check for zero errors

#### Services Page (services.html):
- [ ] Test URL: https://photonvoltenergy.com/services.html
- [ ] Verify 4 Service schemas detected
- [ ] Verify BreadcrumbList schema detected
- [ ] Check for zero errors

#### Contact Page (contact.html):
- [ ] Test URL: https://photonvoltenergy.com/contact.html
- [ ] Verify ContactPage schema detected
- [ ] Verify FAQPage schema detected (4 questions)
- [ ] Verify BreadcrumbList schema detected
- [ ] Check for zero errors

#### Blogs Page (blogs.html):
- [ ] Test URL: https://photonvoltenergy.com/blogs.html
- [ ] Verify CollectionPage schema detected
- [ ] Verify ItemList schema detected (3 items)
- [ ] Verify BreadcrumbList schema detected
- [ ] Check for zero errors

---

## ✅ 6. Schema Validator Testing

### Validate with Schema.org Validator:
URL: https://validator.schema.org/

- [ ] Test each page's schema markup
- [ ] Verify no warnings or errors
- [ ] Check all properties are recognized

---

## 📱 7. Mobile-Friendly Test

### Test Mobile Compatibility:
URL: https://search.google.com/test/mobile-friendly

- [ ] Test homepage
- [ ] Test about page
- [ ] Test services page
- [ ] Test contact page
- [ ] Test blogs page
- [ ] Verify all pages pass mobile-friendly test

---

## ⚡ 8. PageSpeed Insights

### Test Performance:
URL: https://pagespeed.web.dev/

Test each page and aim for:
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

Pages to test:
- [ ] Homepage
- [ ] About
- [ ] Services
- [ ] Contact
- [ ] Blogs

---

## 🔎 9. Google Search Console Setup

### Initial Setup:
- [ ] Add property to Search Console
- [ ] Verify ownership (HTML tag method recommended)
- [ ] Submit sitemap.xml
- [ ] Request indexing for all main pages

### Monitor:
- [ ] Check Coverage report (no errors)
- [ ] Check Enhancements → Breadcrumbs
- [ ] Check Enhancements → FAQ
- [ ] Check Enhancements → Organization
- [ ] Monitor search performance after 2-4 weeks

---

## 🎯 10. Meta Tags Verification

### Check Each Page Has:
- [ ] Unique title tag (50-60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] Canonical URL
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Robots meta tag (INDEX,FOLLOW)
- [ ] Viewport meta tag

---

## 🌐 11. Structured Data in SERPs

### After 1-2 Weeks, Check Google Search:

Search for: "Photonvolt Energy Kozhikode"
- [ ] Business information appears in Knowledge Panel
- [ ] Star rating visible (if reviews added)
- [ ] Opening hours visible
- [ ] Address and phone visible

Search for: "Photonvolt Energy FAQ"
- [ ] FAQ rich snippets appear
- [ ] Questions expandable in search results

Search for: "solar installation Kozhikode"
- [ ] Website appears in local pack
- [ ] Service information visible

---

## 📈 12. Analytics Setup (Recommended)

### Google Analytics 4:
- [ ] Install GA4 tracking code
- [ ] Set up conversion tracking
- [ ] Monitor organic search traffic

### Google Tag Manager (Optional):
- [ ] Install GTM container
- [ ] Add GA4 via GTM
- [ ] Set up event tracking

---

## 🔧 13. Technical SEO Checklist

- [ ] All images have alt text
- [ ] All links have descriptive anchor text
- [ ] No broken links (use Screaming Frog or similar)
- [ ] HTTPS enabled (SSL certificate)
- [ ] Page load time < 3 seconds
- [ ] No duplicate content
- [ ] Proper URL structure (lowercase, hyphens)
- [ ] 404 page exists and is helpful

---

## 📝 14. Content Quality Check

- [ ] Unique content on each page
- [ ] Keyword-rich but natural content
- [ ] Proper heading hierarchy
- [ ] Internal linking between pages
- [ ] External links to authoritative sources
- [ ] Content updated regularly (especially blog)

---

## 🎨 15. User Experience (UX)

- [ ] Clear call-to-action buttons
- [ ] Easy navigation
- [ ] Contact information easily accessible
- [ ] Forms work correctly
- [ ] Mobile navigation works smoothly
- [ ] Fast page transitions

---

## 📊 Expected Timeline for Results

| Timeframe | Expected Results |
|-----------|------------------|
| 1-3 days | Pages indexed by Google |
| 1-2 weeks | Rich snippets start appearing |
| 2-4 weeks | Improved search rankings |
| 1-3 months | Significant organic traffic increase |
| 3-6 months | Established local SEO presence |

---

## 🚨 Common Issues & Solutions

### Issue: Schema not detected
**Solution:** Validate JSON-LD syntax, ensure proper closing tags

### Issue: Sitemap not processing
**Solution:** Check XML syntax, verify URL accessibility

### Issue: Pages not indexing
**Solution:** Check robots.txt, request indexing in Search Console

### Issue: Mobile-friendly test fails
**Solution:** Check viewport meta tag, test responsive design

---

## 📞 Support Resources

- **Google Search Central:** https://developers.google.com/search
- **Schema.org Documentation:** https://schema.org/docs/documents.html
- **Google Search Console Help:** https://support.google.com/webmasters

---

**Last Updated:** February 17, 2026  
**Version:** 1.0
