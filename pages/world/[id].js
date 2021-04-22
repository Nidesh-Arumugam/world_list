export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(world => {
      return {
        params: { id: world.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { world: data }
    }
  }
  
  const Details = ({ world }) => {
    return (
      <div>
        <h1>{ world.name }</h1>
        <p>{ world.email }</p>
        <p>{ world.website }</p>
        <p>{ world.address.city }</p>
      </div>
    );
  }
  
  export default Details;