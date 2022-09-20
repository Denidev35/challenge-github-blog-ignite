/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../../lib/axios'

import {
  ProfileContainer,
  ContainerNameAndGit,
  DescriptionProfile,
  InfoProfile,
  InfoIcon,
  ContainerInfoProfile,
} from './styles'
import { useEffect, useState } from 'react'

export interface User {
  avatar_url: string
  bio: string
  name: string
  followers: number
  company: string
  login: string
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<User>()

  async function loadUserGithub() {
    const respose = await api.get<User>('users/josepholiveira')

    const { name, bio, company, followers, login, avatar_url, html_url } =
      respose.data

    const userData = {
      name,
      bio,
      company,
      followers,
      login,
      avatar_url,
      html_url,
    }

    setUser(userData)
  }

  useEffect(() => {
    loadUserGithub()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <ContainerInfoProfile>
        <ContainerNameAndGit>
          <h1>{user?.name}</h1>
          <a href={user?.html_url}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ContainerNameAndGit>
        <DescriptionProfile>{user?.bio}</DescriptionProfile>
        <InfoProfile>
          <InfoIcon>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </InfoIcon>
          <InfoIcon>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </InfoIcon>
          <InfoIcon>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </InfoIcon>
        </InfoProfile>
      </ContainerInfoProfile>
    </ProfileContainer>
  )
}
