import styled from 'styled-components'

export const InfoPostContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  height: 168px;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
export const PostTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  margin-top: 1.25rem;
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`

export const InfoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-span']};

  svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`
