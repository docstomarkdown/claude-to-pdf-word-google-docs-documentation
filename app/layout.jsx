import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import ClarityInit from "./ClarityInit"; // import the client-only component
import Script from "next/script";

import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "Claude to PDF, Word and Google Docs – Documentation",
    template: "%s – Claude to PDF, Word and Google Docs – Documentation",
  },
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<b>Claude to PDF, Word and Google Docs – Documentation</b>}

    // ... Your additional navbar options
  />
);

const footer = (
  <Footer>
    © {new Date().getFullYear()}. Owned and Maintained by &nbsp;{" "}
    <a
      href="https://www.thinksolv.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "blue", textDecoration: "underline" }}
    >
      Thinksolv Technologies Private Limited
    </a>
    .
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        
    
      </Head>
      <body>
        <ClarityInit /> {/* Clarity initialization runs on client */}
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{
            content: null,
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
