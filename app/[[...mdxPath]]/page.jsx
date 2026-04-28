import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { notFound } from 'next/navigation'
 
export const generateStaticParams = generateStaticParamsFor('mdxPath')
 
function getValidMdxPath(params) {
  const pathSegments = params?.mdxPath
  if (!Array.isArray(pathSegments)) return []
  // Skip static asset requests (e.g. /favicon.ico) in catch-all docs route.
  if (pathSegments.some((segment) => segment.includes('.'))) return null
  return pathSegments
}

export async function generateMetadata(props) {
  const params = await props.params
  const mdxPath = getValidMdxPath(params)
  if (mdxPath === null) return {}
  const { metadata } = await importPage(mdxPath)
  return metadata
}
 
const Wrapper = getMDXComponents().wrapper
 
export default async function Page(props) {
  const params = await props.params
  const mdxPath = getValidMdxPath(params)
  if (mdxPath === null) notFound()
  const result = await importPage(mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}