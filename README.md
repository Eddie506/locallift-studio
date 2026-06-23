# LocalLift Studio Template

A static website template for selling small-business websites to restaurants, salons, home services, shops, and other local companies.

## Files

- `index.html` contains the page sections and editable business copy.
- `styles.css` contains the visual system, responsive layout, and industry accent themes.
- `script.js` powers the industry switcher, sticky header state, and demo form message.
- `assets/local-business-hero.png` is the generated project image used in the hero and preview sections.
- `robots.txt`, `sitemap.xml`, `.nojekyll`, `_headers`, `_redirects`, `netlify.toml`, and `wrangler.toml` prepare the site for production static hosting.

## Customize

1. Replace `LocalLift Studio` with your company name.
2. Swap the hero image in `assets/local-business-hero.png`.
3. Edit the package names and sales copy in `index.html`.
4. Update the industry switcher content in `script.js`.
5. Connect the form in `#contact` to your preferred email, CRM, or booking tool.
6. Replace the GitHub Pages URL in `index.html`, `robots.txt`, and `sitemap.xml` after you buy or connect a real domain.

Open `index.html` directly in a browser to preview the site.

## Deploy

This is a static site, so it can run on GitHub Pages, Cloudflare Pages, Netlify, or any ordinary web server.

### GitHub Pages

1. Create a public repository.
2. Upload all files in this folder to the repository root.
3. In repository settings, enable Pages from the `main` branch and root folder.
4. Use the generated `https://USERNAME.github.io/REPOSITORY/` URL or connect a custom domain.

### Cloudflare Pages

1. Create a Pages project.
2. Use Direct Upload or connect a Git repository.
3. Set the output directory to this folder. No build command is required.
4. Connect a custom domain from the Pages dashboard.

### Netlify

1. Create a new site.
2. Upload this folder or connect a Git repository.
3. Use `.` as the publish directory. No build command is required.
4. Connect a custom domain from the domain settings.
