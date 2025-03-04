export default {
    async fetch(request) {
      const url = new URL(request.url);
      const gonePages = [
        '/regular-pruning-for-tree-health/',
        '/author/jacob888/',
        '/author/jacob888/feed/',
        '/author/jason818/',
        '/author/jason818/feed/',
        '/author/jason818/page/2/',
        '/category/uncategorized/',
        '/category/uncategorized/feed/',
        '/category/uncategorized/page/2/',
        '/comments/feed/',
        '/contact-us-test/',
        '/mailing-list/',
        '/terms-of-service/privacy-policy/',
        '/wp-admin/admin-ajax.php',
        '/wp-sitemap-index.xsl',
        '/wp-sitemap-posts-page-1.xml',
        '/wp-sitemap-posts-post-1.xml',
        '/wp-sitemap.xml',
        '/wp-sitemap.xsl',
        '/posts/page/2/',
        '/essential-guide-best-tools-for-the-garden-every-gardener-needs/feed/',
        '/biggest-tree-on-earth/feed/',
        '/cornus-dogwood/feed/',
        '/essential-tree-trimming-guide-for-healthy-trees/feed/',
        '/expert-emergency-tree-service-for-crisis-situations/feed/',
        '/how-do-i-start-a-garden/feed/',
        '/hyperion-redwood/feed/',
        '/jacaranda/feed/',
        '/palm-tree/feed/',
        '/proper-tree-care-tips-for-healthy-trees-and-environment/feed/',
        '/the-different-types-of-fertilizer-a-complete-guide/feed/',
        '/the-earth-needs-more-trees-plant-more/feed/',
        '/exploring-the-trees-of-the-mojave-desert-a-guide/feed/',
        '/top-10-plants-for-your-sizzling-summer-garden-expert-picks/feed/',
        '/tree-loving/feed/',
        '/tree-root-grinding/feed/',
        '/tree-roots/feed/',
        '/tree-zones/feed/',
        '/privacy-policy/feed/',
        '/about-us/',
        '/contact-us/',
        '/our-affiliates/',
        '/our-affiliates/' // Duplicate in your list, but included for completeness
      ];
  
      // Check if the requested path is in the gonePages list
      if (gonePages.includes(url.pathname)) {
        return new Response('This page is permanently gone.', {
          status: 410,
          statusText: 'Gone'
        });
      }
  
      // Pass through to Astro static files if not in the list
      return fetch(request);
    },
  };