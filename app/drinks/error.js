"use client"; //error page must be in client mode

const error = (error) => {
  console.log(error);
  // return <div>there was an error...</div>;
  return <div>{error.error.message}</div>;
};
export default error;
