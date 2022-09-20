/* eslint-disable react/no-children-prop */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { api } from '../../lib/axios'
import { Post as PostData } from '../Home'

import { InfoPost } from './InfoPost'
import { Container, Markdown } from './styles'

export function Post() {
  const [post, setPost] = useState<PostData>()

  const { number } = useParams()

  async function loadPost() {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
    )
    setPost(response.data)
  }

  useEffect(() => {
    loadPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number])

  if (!post) return <></>

  return (
    <Container>
      <InfoPost post={post} />
      <Markdown
        children={post?.body}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </Container>
  )
}
