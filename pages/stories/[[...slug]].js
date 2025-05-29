import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import { getMdxFromString } from '@/lib/mdx'
import { verifyToken } from '@/lib/utils/verifyToken'
const DEFAULT_LAYOUT = 'PostLayout'

export async function getServerSideProps(context) {
  const { req, params } = context

  const isAuthenticated = verifyToken(req)

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  // 2. Get slug from params
  const slug = params.slug ? params.slug.join('/') : 'index'

  // 3. Fetch MDX file from Google Drive
  const fileUrl = process.env.GDRIVE_PUBLIC_LINK
  const res = await fetch(fileUrl)
  const mdxContent = await res.text()
  // console.log('Fetched MDX content:', mdxContent)

  const post = await getMdxFromString(mdxContent)
  console.log(post.mdxSource)

  return {
    props: {
      post,
    },
  }
}

export default function Blog({ post }) {
  const { mdxSource, toc, frontMatter } = post

  return frontMatter?.draft !== true ? (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      toc={toc}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  ) : (
    <div className="mt-24 text-center">
      <PageTitle>
        Under Construction{' '}
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </PageTitle>
    </div>
  )
}
