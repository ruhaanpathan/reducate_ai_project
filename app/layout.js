import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'JG University | New Age Tech-Driven University in Ahmedabad',
  description:
    'JG University is a UGC approved, new-age tech-driven university in Ahmedabad offering MBA, BBA, MCA, BCA, B.Tech, B.Com and more. Shape your future with industry-relevant education.',
  keywords:
    'JG University, Ahmedabad, MBA, BBA, MCA, BCA, B.Tech, university Gujarat, tech university, UGC approved',
  openGraph: {
    title: 'JG University | New Age Tech-Driven University',
    description:
      'Shape your future at JG University. Industry-relevant programs, world-class faculty, and cutting-edge infrastructure.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'JG University',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHTSZRBR');`,
          }}
        />
      </head>
      <body className="font-body bg-white text-gray-800">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHTSZRBR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
