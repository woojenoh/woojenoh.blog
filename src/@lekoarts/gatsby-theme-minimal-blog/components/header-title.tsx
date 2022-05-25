/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

type Props = {
  isDark: boolean
}

const HeaderTitle = ({ isDark }: Props) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4], display: 'flex', alignItems: 'center' }}>
        <img src={isDark ? '/logo-dark.png' : '/logo.png'} sx={{ margin: ['0 7.5px 2.5px 0', '0 10px 5px 0'], height: [30, 35] }} />
        {siteTitle}
      </div>
    </Link>
  )
}

export default HeaderTitle
