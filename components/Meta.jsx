import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/dashboard-icon.svg" />
      <title>GenioPay - {title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "GenioPay - Digital Wallet",
  keywords: "fintech, digital wallet",
  description: "manage all your wallets from one place",
};

export default Meta;
