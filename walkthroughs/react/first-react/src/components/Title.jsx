import dayjs from "dayjs";

const Title = ({ value }) => {
  return (
    <div className="title-container">
      <h1>{value}</h1>
      <p>{dayjs().format("MMM DD YYYY")}</p>
    </div>
  );
};

export default Title;
