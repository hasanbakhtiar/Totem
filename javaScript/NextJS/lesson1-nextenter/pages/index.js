import Layout from "../components/layout";

const index = () => {
  return (
    <Layout>
      <h1>Hello Next JS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        exercitationem sit similique, quidem ipsa sed vitae quis dolorum. Modi
        reiciendis veritatis deserunt cum nesciunt id, quo laboriosam cupiditate
        ipsa qui!
      </p>
      <style jsx>{`
        p {
          color: green;
          background:black;
        }
      `}</style>
    </Layout>
  );
};
export default index;
