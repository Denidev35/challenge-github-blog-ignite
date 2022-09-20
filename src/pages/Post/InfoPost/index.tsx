import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ContainerNav,
  InfoIcon,
  Info,
  PostTitle,
  InfoPostContainer,
} from './styles'
import { Post } from '../../Home'
import { NavLink } from 'react-router-dom'

interface PostProps {
  post: Post
}

export function InfoPost({ post }: PostProps) {
  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
  })

  return (
    <InfoPostContainer>
      <ContainerNav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>
        <a href={post.html_url}>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ContainerNav>
      <PostTitle>{post.title}</PostTitle>
      <Info>
        <InfoIcon>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </InfoIcon>
        <InfoIcon>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formattedDate}
        </InfoIcon>
        <InfoIcon>
          <FontAwesomeIcon icon={faComment} />
          {post.comments} comentários
        </InfoIcon>
      </Info>
    </InfoPostContainer>
  )
}
