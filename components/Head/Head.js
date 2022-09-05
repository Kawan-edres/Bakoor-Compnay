import Head from 'next/head';

const Meta = ({ title, keywords, description,canonicalLink }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta httpEquiv = "content-language" content = "en" />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content="Bakoor" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bakoot | Company" />
      <meta property="og:description" content="Bakoor Company for Construction and General Trading is a recognized industry leader in construction management, design-build, industrial services, pre-construction, and general contracting by hundreds of clients throughout Iraq. Bakoor was established in 2003, and is one of the premier construction companies with over 200 projects accomplished." />
      <meta property="og:url" content="https://bakoorcompany.com" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Bakoor | Company" />
      <meta property="twitter:description" content="Bakoor Company for Construction and General Trading is a recognized industry leader in construction management, design-build, industrial services, pre-construction, and general contracting by hundreds of clients throughout Iraq. Bakoor was established in 2003, and is one of the premier construction companies with over 200 projects accomplished." />
      <meta property="twitter:image" content="http://bakoorcompany.com/bakoor_construction/images/logo.png" />
      <meta name="author" content="Bakoor Company for construction and water mineral " />
      <meta name="robots" content="all" />



      <link rel="shortcut icon" type="image/x-icon" sizes="7x32" href="favicon.ico" />
      <link  rel="shortcut icon" type="image/x-icon" sizes="16x16" href="favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180"  href="favicon.ico" />
      <link rel="canonical" href={canonicalLink} />
      
      {/* solve facion icon error on browser */}
      <link rel="shortcut icon" href="#" />

    </Head>
  );
};

Meta.defaultProps = {
  title: 'Bakoor | Company',
  keywords: 'Erbil,Kurdistan,Iraq,Company,Company in Erbil, Ductile Iron Pipes,Road development,Crushed Stones,Cup Water,  business,Sun Hotel in Erbil,bakoor website, management,hospital construction,,management ,quality,Hyper market,gas station,construction,trading,steele construction,water supply,water mineral,Road construction,Hotel,',
  description: 'Bakoor Company for Construction and General Trading is a recognized industry leader in construction management, design-build, industrial services, pre-construction, and general contracting by hundreds of clients throughout Iraq. Bakoor was established in 2003, and is one of the premier construction companies with over 200 projects accomplished.',
  

};

export default Meta;