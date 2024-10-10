import { gql, useQuery } from '@apollo/client';
import './App.css'

export interface Person {
  id: string;
  name: string;
  phone?: string;
  check: string;
  address: string;
  city: string;
  age?: string;
  canDrink: string;
}

const MAIN_PERSONS = gql`
query {
  personCount,
  allPersons {
    id,
    name,
    age,
    phone
  }
}
`;

type MAIN_PERSONS_TYPE = {
  personCount: number,
  allPersons: Person[],
}

function App() {

  const { data, error, loading } = useQuery<MAIN_PERSONS_TYPE>(MAIN_PERSONS);

  console.log(data)

  if (loading) return <p>Loading...</p>; // loading
  if (error) return <p>Error: {error.message}</p>; // error

  return (
    <div>
      <h1>Número de Personas: {data?.personCount}</h1>
      {
        data?.allPersons.map((person: Person) => (
          <div key={person.id}>
            <h4>Nombre: {person.name}</h4>
            <p>Edad: {person.age}</p>
            <p>Telefono: {person.phone}</p>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default App
