import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput/index'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput postsLength={10} />
    </>
  )
}
