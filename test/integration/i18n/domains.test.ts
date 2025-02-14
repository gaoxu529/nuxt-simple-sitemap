import { describe, expect, it } from 'vitest'
import { createResolver } from '@nuxt/kit'
import { $fetch, setup } from '@nuxt/test-utils'

const { resolve } = createResolver(import.meta.url)

await setup({
  rootDir: resolve('../../fixtures/i18n'),
  build: true,
  server: true,
  nuxtConfig: {
    i18n: {
      differentDomains: true,
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          domain: 'nuxtseo.com',
        },
        {
          code: 'es',
          iso: 'es-ES',
          domain: 'es.nuxtseo.com',
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          domain: 'fr.nuxtseo.com',
        },
      ],
    },
    sitemap: {
    },
  },
})
describe('i18n domains', () => {
  it('basic', async () => {
    // const index = await $fetch('/sitemap.xml')
    // expect(index).toMatchInlineSnapshot(`
    //   "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/__sitemap__/style.xsl\\"?>
    //   <sitemapindex xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
    //       <sitemap>
    //           <loc>https://nuxtseo.com/en-US-sitemap.xml</loc>
    //       </sitemap>
    //       <sitemap>
    //           <loc>https://nuxtseo.com/es-ES-sitemap.xml</loc>
    //       </sitemap>
    //       <sitemap>
    //           <loc>https://nuxtseo.com/fr-FR-sitemap.xml</loc>
    //       </sitemap>
    //   </sitemapindex>"
    // `)

    const en = await $fetch('/en-US-sitemap.xml')
    console.log("en-US-sitemap.xml is ",en);

    const fr = await $fetch('/fr-FR-sitemap.xml')
    console.log("fr-FR-sitemap.xml is ",fr)

    const es = await $fetch('/es-ES-sitemap.xml')
    console.log("es-ES-sitemap.xml is ",es)

    expect(en).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/__sitemap__/style.xsl\\"?>
      <urlset xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:video=\\"http://www.google.com/schemas/sitemap-video/1.1\\" xmlns:xhtml=\\"http://www.w3.org/1999/xhtml\\" xmlns:image=\\"http://www.google.com/schemas/sitemap-image/1.1\\" xmlns:news=\\"http://www.google.com/schemas/sitemap-news/0.9\\" xsi:schemaLocation=\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\\" xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
          <url>
              <loc>https://nuxtseo.com/</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://nuxtseo.com/\\" />
          </url>
          <url>
              <loc>https://nuxtseo.com/test/</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://nuxtseo.com/test/\\" />
          </url>
          <url>
              <loc>https://nuxtseo.com/__sitemap/url/</loc>
              <changefreq>weekly</changefreq>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://nuxtseo.com/__sitemap/url/\\" />
          </url>
      </urlset>"
    `)
    expect(fr).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/__sitemap__/style.xsl\\"?>
      <urlset xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:video=\\"http://www.google.com/schemas/sitemap-video/1.1\\" xmlns:xhtml=\\"http://www.w3.org/1999/xhtml\\" xmlns:image=\\"http://www.google.com/schemas/sitemap-image/1.1\\" xmlns:news=\\"http://www.google.com/schemas/sitemap-news/0.9\\" xsi:schemaLocation=\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\\" xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
          <url>
              <loc>https://fr.nuxtseo.com/</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://fr.nuxtseo.com/\\" />
          </url>
          <url>
              <loc>https://fr.nuxtseo.com/test/</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://fr.nuxtseo.com/test/\\" />
          </url>
          <url>
              <loc>https://fr.nuxtseo.com/__sitemap/url/</loc>
              <changefreq>weekly</changefreq>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://fr.nuxtseo.com/__sitemap/url/\\" />
          </url>
      </urlset>"
    `)
    expect(es).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><?xml-stylesheet type=\\"text/xsl\\" href=\\"/__sitemap__/style.xsl\\"?>
      <urlset xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:video=\\"http://www.google.com/schemas/sitemap-video/1.1\\" xmlns:xhtml=\\"http://www.w3.org/1999/xhtml\\" xmlns:image=\\"http://www.google.com/schemas/sitemap-image/1.1\\" xmlns:news=\\"http://www.google.com/schemas/sitemap-news/0.9\\" xsi:schemaLocation=\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd\\" xmlns=\\"http://www.sitemaps.org/schemas/sitemap/0.9\\">
          <url>
              <loc>https://es.nuxtseo.com/</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://es.nuxtseo.com/\\" />
          </url>
          <url>
              <loc>https://es.nuxtseo.com/test/</loc>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/test/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://es.nuxtseo.com/test/\\" />
          </url>
          <url>
              <loc>https://es.nuxtseo.com/__sitemap/url/</loc>
              <changefreq>weekly</changefreq>
              <xhtml:link rel=\\"alternate\\" hreflang=\\"en-US\\" href=\\"https://nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"es-ES\\" href=\\"https://es.nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"fr-FR\\" href=\\"https://fr.nuxtseo.com/__sitemap/url/\\" />
              <xhtml:link rel=\\"alternate\\" hreflang=\\"x-default\\" href=\\"https://es.nuxtseo.com/__sitemap/url/\\" />
          </url>
      </urlset>"
    `)

  }, 60000)
})
