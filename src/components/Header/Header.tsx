import Logo from "./Logo";
import SearchBox from "./SearchBox";
import PagesLink from "./PagesLink";
import SocialLinks from "./SocialLinks";
import Theme from "./Theme";

export default function Header() {
  return (
    <>
      <div className="flex gap-4">
        <Logo />
        <SearchBox />
      </div>
      <div className="flex gap-5">
        <PagesLink />
        <Theme />
        <SocialLinks />
      </div>
    </>
  );
}
