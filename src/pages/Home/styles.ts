import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PublicationsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.5rem;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
  }
`
export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`
