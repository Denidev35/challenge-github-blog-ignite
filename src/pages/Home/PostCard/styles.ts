import styled from 'styled-components'

export const Post = styled.button`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  width: 416px;
  height: 260px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    margin-top: 1.25rem;
    text-align: left;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const InfoPost = styled.div`
  display: grid;
  grid-template-columns: 283px 1fr;

  h3 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
    text-align: left;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
  }
`
