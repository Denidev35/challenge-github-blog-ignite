import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Markdown = styled(ReactMarkdown)`
  max-width: 864px;

  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  img {
    max-width: 800px;
    margin: 1rem 0;
  }

  a {
    color: ${(props) => props.theme.blue};
  }
`
