import { Link, Route, Switch } from "wouter";
import Flow1 from "@/versions/diagram-1-default/components/Flow";
import Flow2 from "@/versions/diagram-2-zustand/components/Flow";

function App() {
  return (
    <Switch>
      <Route path="/diagram-1-default" component={Flow1} />
      <Route path="/diagram-2-zustand" component={Flow2} />
      <Route>
        <div className="h-screen flex flex-col justify-center">
          <main className="text-center w-[300px] mx-auto max-w-screen">
            <h1 className="text-zinc-500 text-2xl mb-2">Flows</h1>
            <nav className="text-left">
              <ul>
                <li>
                  <Link href="/diagram-1-default">1. Default</Link>
                </li>
                <li>
                  <Link href="/diagram-2-zustand">2. Zustand store</Link>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
