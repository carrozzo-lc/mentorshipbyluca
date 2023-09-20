import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

type SeoProps = {
  title: string, 
  description: string,
  name: string, 
  type: string, 
  siteName: string, 
  url: string, 
  image?: string
}

const Seo = ({ title, description, name, type, siteName, url, image }: SeoProps) => {
  return (
    <Helmet>
      { /* Standard metadata tags */}
      {url && <link rel="canonical" href={url} />}
      {title && <title>{title}</title>}
      {description && <meta name='description' content={description} />}
      { /* End standard metadata tags */}
      { /* Facebook tags */}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {image && <meta property="og:image" content={image} />}      
      { /* End Facebook tags */}
      { /* Twitter tags */}
      <meta name="twitter:card" content="summary" />
      {name && <meta name="twitter:creator" content={name} />}
      {type && <meta name="twitter:card" content={type} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      { /* End Twitter tags */}
    </Helmet>
  )
}

export default Seo;