import dayjs from "dayjs";

const Title = () => {
  return (
    <div className="title-container">
      <h1>React.js</h1>
      <p>{dayjs().format("MMM DD YYYY")}</p>
    </div>
  );
};

export default Title;
