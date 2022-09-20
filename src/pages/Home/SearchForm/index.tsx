import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

interface SearchFormProps {
  searchFormData: (data: SearchFormInput) => Promise<void>
}

export function SearchForm({ searchFormData }: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await searchFormData(data)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
