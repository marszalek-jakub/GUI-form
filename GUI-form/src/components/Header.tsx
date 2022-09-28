interface Header {
  title: string;
}

const Header = ({ title }: Header) => {
  return <h1>{title}</h1>;
};

export default Header;
