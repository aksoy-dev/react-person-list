import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Person from "./PersonList/PersonList";
import MydModalWithGrid from "./Modal/Modal";

export const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/users")
      .then((response) => setPersons(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <>
      <div className="inclusive">
        {persons.map((person) => {
          return (
            <>
              <div className="person-list">
                <Person
                  img={person.img}
                  namesurname={person.namesurname}
                  job={person.job}
                >
                  <p className="about-text">{person.children}</p>

                  <MydModalWithGrid
                    job={person.job}
                    img={person.img}
                    namesurname={person.namesurname}
                  />
                </Person>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default App;
