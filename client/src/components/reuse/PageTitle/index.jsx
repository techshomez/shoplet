import Helmet from "react-helmet";

const PageTitle = ({ title, name }) => {
  return (
    <div>
      <Helmet>
        <title>
          {title} | {name}
        </title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
