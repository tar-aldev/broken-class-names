import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Index(props: any) {
  console.log('props', props);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return <div>model name: {props?.modelName}</div>;
}

export const getServerSideProps = async () => {
  try {
    // Just to trigger route
    const res = await axios.get(`http://localhost:4200/api/hello`);
    return {
      props: res.data,
    };
  } catch (e) {
    return {
      props: {
        err: 'Error fetching',
      },
    };
  }
};
