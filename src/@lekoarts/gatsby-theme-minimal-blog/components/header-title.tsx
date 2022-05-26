// @ts-nocheck
/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "../utils/replaceSlashes";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import Logo from "../svg/logo.svg";
import LogoDark from "../svg/logo-dark.svg";

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
        {isDark ? <LogoDark sx={iconStyle} /> : <Logo sx={iconStyle} />}
        {siteTitle}
      </div>
    </Link>
  );
};

const iconStyle = {
  display: "inline",
  width: "auto",
  margin: ["0 7.5px 0 0", "0 10px 0 0"],
  height: [30, 35],
  verticalAlign: "sub",
};

export default HeaderTitle;
