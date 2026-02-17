# Schema Markup Quick Reference Guide
## Photonvolt Energy Website

This guide provides a quick overview of all Schema.org structured data implemented on each page.

---

## 📄 Page-by-Page Schema Breakdown

### 🏠 Homepage (index.html)
**URL:** https://photonvoltenergy.com/

#### Schema Types:
1. **Organization** (`@id: #organization`)
   - Company name, logo, URL
   - Contact point with phone and service area
   - Social media profiles

2. **LocalBusiness** (`@id: #localbusiness`)
   - Full business details
   - Physical address: Nadapuram Road, Vadakara, Kerala
   - Geo-coordinates: 11.6085, 75.5937
   - Opening hours: Mon-Sat, 9:00 AM - 6:00 PM
   - Price range: $$
   - Aggregate rating: 4.8/5 (100 reviews)

3. **Service** (`@id: #service`)
   - Service type: Solar Installation
   - Service area: Kozhikode
   - Offer catalog with 4 services:
     - On-Grid Solar Systems
     - Hybrid Solar Systems
     - Standalone Solar Systems
     - Operation and Maintenance

4. **WebSite** (`@id: #website`)
   - Website metadata
   - Search action enabled

5. **WebPage** (`@id: #webpage`)
   - Page-specific information
   - Title and description

#### Rich Results Eligible For:
- ✅ Organization Knowledge Panel
- ✅ Local Business Rich Results
- ✅ Service Listings
- ✅ Star Ratings
- ✅ Business Hours
- ✅ Contact Information

---

### 📖 About Page (about.html)
**URL:** https://photonvoltenergy.com/about.html

#### Schema Types:
1. **AboutPage** (`@id: #webpage`)
   - Page designation as About page
   - Company description and mission

2. **Organization** (`@id: #organization`)
   - Extended company information
   - Founding date: 2009
   - Number of employees: 20
   - Company slogan: "Empowering a Sustainable Future"

3. **BreadcrumbList** (`@id: #breadcrumb`)
   - Position 1: Home
   - Position 2: About

#### Rich Results Eligible For:
- ✅ Breadcrumb Navigation
- ✅ Knowledge Graph Information
- ✅ Company Details

---

### 🔧 Services Page (services.html)
**URL:** https://photonvoltenergy.com/services.html

#### Schema Types:
1. **CollectionPage** (`@id: #webpage`)
   - Service collection page designation

2. **Service** (4 instances)
   
   **Service 1: On-Grid Solar Systems**
   - Provider: Photonvolt Energy
   - Description: Grid integration with continuous energy
   - Area served: Kozhikode
   
   **Service 2: Hybrid Solar Systems**
   - Provider: Photonvolt Energy
   - Description: Energy independence with battery storage
   - Area served: Kozhikode
   
   **Service 3: Standalone Solar Systems**
   - Provider: Photonvolt Energy
   - Description: Off-grid power for remote areas
   - Area served: Kozhikode
   
   **Service 4: Operation and Maintenance**
   - Provider: Photonvolt Energy
   - Description: Regular maintenance and monitoring
   - Area served: Kozhikode

3. **BreadcrumbList** (`@id: #breadcrumb`)
   - Position 1: Home
   - Position 2: Services

#### Rich Results Eligible For:
- ✅ Service Rich Snippets
- ✅ Breadcrumb Navigation
- ✅ Local Service Listings
- ✅ Service Categories

---

### 📞 Contact Page (contact.html)
**URL:** https://photonvoltenergy.com/contact.html

#### Schema Types:
1. **ContactPage** (`@id: #webpage`)
   - Contact page designation

2. **FAQPage** (`@id: #faq`)
   - 4 Question-Answer pairs:
   
   **Q1:** How much does a solar installation cost?
   **A1:** Costs vary based on system size and components. We offer free consultations to provide accurate estimates tailored to your needs.
   
   **Q2:** Do you offer maintenance services?
   **A2:** Yes, we provide comprehensive maintenance packages including cleaning, monitoring, and technical troubleshooting to ensure optimal performance.
   
   **Q3:** What is the warranty period?
   **A3:** Our solar panels typically come with a 25-year performance warranty, and inverters usually have a 5-10 year warranty.
   
   **Q4:** How long does installation take?
   **A4:** Residential installations usually take 1-3 days. Commercial projects may take longer depending on the scale and complexity.

3. **BreadcrumbList** (`@id: #breadcrumb`)
   - Position 1: Home
   - Position 2: Contact

#### Rich Results Eligible For:
- ✅ FAQ Rich Snippets (Expandable in SERPs)
- ✅ Breadcrumb Navigation
- ✅ Contact Information
- ✅ Increased SERP Real Estate

---

### 📝 Blogs Page (blogs.html)
**URL:** https://photonvoltenergy.com/blogs.html

#### Schema Types:
1. **CollectionPage** (`@id: #webpage`)
   - Blog collection page designation

2. **ItemList** (`@id: #bloglist`)
   - List of blog posts:
   
   **Item 1:** Harnessing Solar Energy In Kerala
   - URL: /Harnessing%20Solar.html
   
   **Item 2:** On-Grid Solar Solutions With Photonvolt Energy
   - URL: /OnGrid%20Solar.html
   
   **Item 3:** Harnessing The Best Of Both Worlds: Hybrid Solar Solutions
   - URL: /Hybrid%20Solar.html

3. **BreadcrumbList** (`@id: #breadcrumb`)
   - Position 1: Home
   - Position 2: Blogs

#### Rich Results Eligible For:
- ✅ Blog Post Carousel
- ✅ Breadcrumb Navigation
- ✅ Content Listings
- ✅ Article Previews

---

## 🎯 Schema Implementation Best Practices

### ✅ What We Did Right:

1. **Used JSON-LD Format**
   - Easiest to implement and maintain
   - Recommended by Google
   - Doesn't interfere with page content

2. **Implemented @graph Pattern**
   - Multiple schema types on single page
   - Proper entity relationships
   - Clean, organized structure

3. **Used Unique @id Values**
   - Proper entity identification
   - Enables cross-page referencing
   - Prevents duplication

4. **Included All Required Properties**
   - Each schema type has mandatory fields
   - Added recommended properties for better results
   - Comprehensive information provided

5. **Maintained Consistency**
   - Same organization ID across pages
   - Consistent naming and formatting
   - Proper URL structure

---

## 🔍 How to Verify Schema Markup

### Method 1: Google Rich Results Test
```
1. Go to: https://search.google.com/test/rich-results
2. Enter page URL
3. Click "Test URL"
4. Review detected schema types
5. Check for errors or warnings
```

### Method 2: Schema Markup Validator
```
1. Go to: https://validator.schema.org/
2. Enter page URL or paste code
3. Click "Run Test"
4. Review validation results
```

### Method 3: Browser DevTools
```
1. Open page in browser
2. Right-click → Inspect
3. Go to Console tab
4. Look for schema-related errors
```

### Method 4: View Page Source
```
1. Right-click on page → View Page Source
2. Search for "application/ld+json"
3. Verify JSON structure is valid
4. Check all properties are present
```

---

## 📊 Expected Rich Results Timeline

| Timeframe | What to Expect |
|-----------|----------------|
| **Immediately** | Schema validates without errors |
| **1-3 days** | Google crawls and indexes pages |
| **1-2 weeks** | Rich results start appearing in search |
| **2-4 weeks** | Full rich snippet implementation |
| **1-3 months** | Improved CTR and rankings |

---

## 🚀 Advanced Schema Opportunities

### Future Enhancements to Consider:

1. **Review Schema**
   - Add customer reviews with Review schema
   - Include star ratings
   - Aggregate review scores

2. **Product Schema**
   - If selling solar panels directly
   - Include pricing and availability
   - Add product images

3. **VideoObject Schema**
   - For installation videos
   - Tutorial content
   - Company overview videos

4. **Event Schema**
   - For webinars or workshops
   - Open house events
   - Training sessions

5. **HowTo Schema**
   - Installation guides
   - Maintenance tutorials
   - DIY solar tips

6. **Article Schema**
   - For blog posts
   - Include author information
   - Add publish dates

---

## 🔧 Troubleshooting Common Issues

### Issue: Schema Not Detected
**Causes:**
- JSON syntax error
- Missing required properties
- Incorrect @type value

**Solutions:**
- Validate JSON syntax
- Check Schema.org documentation
- Use Rich Results Test tool

### Issue: Warnings in Validation
**Causes:**
- Missing recommended properties
- Incorrect data format
- URL issues

**Solutions:**
- Add recommended properties
- Format dates correctly (ISO 8601)
- Use absolute URLs

### Issue: Rich Results Not Showing
**Causes:**
- Page not indexed yet
- Schema errors
- Google hasn't processed yet

**Solutions:**
- Request indexing in Search Console
- Fix any schema errors
- Wait 1-2 weeks for processing

---

## 📚 Schema.org Resources

### Official Documentation:
- **Schema.org:** https://schema.org/
- **Organization:** https://schema.org/Organization
- **LocalBusiness:** https://schema.org/LocalBusiness
- **Service:** https://schema.org/Service
- **FAQPage:** https://schema.org/FAQPage
- **BreadcrumbList:** https://schema.org/BreadcrumbList

### Google Documentation:
- **Structured Data Guidelines:** https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Search Gallery:** https://developers.google.com/search/docs/advanced/structured-data/search-gallery

---

## 💡 Pro Tips

1. **Always validate schema before deploying**
2. **Use absolute URLs in schema markup**
3. **Keep schema updated with business changes**
4. **Monitor Search Console for schema errors**
5. **Test on mobile and desktop**
6. **Use consistent naming across pages**
7. **Include as much detail as possible**
8. **Update lastmod dates in sitemap when schema changes**

---

**Document Version:** 1.0  
**Last Updated:** February 17, 2026  
**Maintained By:** Photonvolt Energy Development Team
