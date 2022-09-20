import { PostCard } from './PostCard'
import { Profile, User } from './Profile'
import { Container, PublicationsInfo, PostContainer } from './styles'
import { SearchForm } from './SearchForm'
import { useState } from 'react'
import { api } from '../../lib/axios'

interface SearchFormData {
  query: string
}

export interface Post {
  id: number
  number: number
  title: string
  html_url: string
  body: string
  login: string
  created_at: Date
  comments: number
  user: User
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  async function searchFormData({ query }: SearchFormData) {
    const response = await api.get('search/issues', {
      params: {
        q: `${query} repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    })
    setPosts(response.data.items)
  }

  return (
    <Container>
      <Profile />
      <PublicationsInfo>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </PublicationsInfo>

      <SearchForm searchFormData={searchFormData} />

      <PostContainer>
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostContainer>
    </Container>
  )
}
