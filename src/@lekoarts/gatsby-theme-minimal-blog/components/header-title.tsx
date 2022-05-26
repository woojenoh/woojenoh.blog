/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "../utils/replaceSlashes";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";

type Props = {
  isDark: boolean;
};

const HeaderTitle = ({ isDark }: Props) => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
        <img
          src={isDark ? "/logo-dark.svg" : "/logo.svg"}
          sx={{
            margin: ["0 7.5px 0 0", "0 10px 0 0"],
            height: [30, 35],
            verticalAlign: "sub",
          }}
        />
        {siteTitle}
      </div>
    </Link>
  );
};

export default HeaderTitle;
