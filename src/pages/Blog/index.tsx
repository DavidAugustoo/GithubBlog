import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput/index'
import { PostsListContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput postsLength={10} />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  )
}
