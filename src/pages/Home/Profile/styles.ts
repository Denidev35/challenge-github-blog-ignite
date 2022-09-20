import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  height: 212px;
  width: 100%;

  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`
export const ContainerInfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerNameAndGit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: bold;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const DescriptionProfile = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 24px;
`

export const InfoProfile = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const InfoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`
