import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    margin-top: 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
    width: 100%;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    &::placeholder {
      font-size: 1rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
