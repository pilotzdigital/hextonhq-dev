import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    const robotsTxt = `# HextonHQ robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://hextonhq.com/sitemap-index.xml

# AI Crawlers — Welcome
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot-Extended
Allow: /
`;

    return new Response(robotsTxt, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
