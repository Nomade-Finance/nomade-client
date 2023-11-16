import { ReactNode } from 'react'
import { m } from 'framer-motion'
import usePostLayout from '@hooks/usePostLayout'
import useTheme from '@hooks/useTheme'

interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout = ({ children }: PostLayoutProps) => {
  const { sidebar, footer } = usePostLayout()
  useTheme()
  return (
    <div>
      {sidebar}
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="post-child"
      >
        {children}
      </m.main>
      {footer}
    </div>
  )
}
export default PostLayout
