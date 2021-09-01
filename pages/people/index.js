import styles from '../../styles/People.module.css';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
};

const People = ({ people }) => {
  return (
    <>
      <Head>
        <title>People List | People</title>
        <meta name="keywords" content="people"></meta>
      </Head>
      <div>
        <h1>List of all people</h1>
        {people.map((p) => (
          <Link href={`/people/${p.id}`} key={p.id}>
            <a className={styles.single}>
              <h3>{p.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default People;
