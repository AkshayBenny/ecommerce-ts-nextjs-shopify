import Head from 'next/head'
import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '../framework/shopify/product/getAllProducts'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Ecommerce webapp created usign nextjs, typescript, tailwindcss and shopify'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{JSON.stringify(products)}</main>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}
