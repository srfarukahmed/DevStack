import { Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreTechnologies from "./components/technologies/ExploreTechnologies";
import type { ITechnologyType } from "./types/TechnologyType"
import Loaders from "./components/Loaders"

const TechnologyPromise = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/Technologies.json");
  const data = await res.json();
  return data;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loaders />}>
      <ExploreTechnologies TechnologyPromise={TechnologyPromise()} />
      </Suspense>
      
    </div>
  );
};

export default App;
