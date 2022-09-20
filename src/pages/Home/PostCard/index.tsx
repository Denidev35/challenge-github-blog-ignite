import { Post as PostData } from '..'
import { Post, InfoPost } from './styles'
import { useNavigate } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  post: PostData
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
  })

  function handleNavigatePost() {
    navigate(`post/${post.number}`, {
      replace: true,
    })
  }

  return (
    <Post onClick={handleNavigatePost}>
      <InfoPost>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </InfoPost>
      <p>{post.body}</p>
    </Post>
  )
}
