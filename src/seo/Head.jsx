import { Helmet } from 'react-helmet-async'

function Head({title, desc, url}) {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" data-rh='true' content={desc} />
        <link rel='canonical' href={url} />
    </Helmet>
  )
}

export default Head
