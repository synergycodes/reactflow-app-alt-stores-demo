import { Link, Route, Switch } from "wouter";

import { cn } from "@/utils/cn";

import Flow1 from "@/versions/diagram-1-default/components/Flow";
import Flow2 from "@/versions/diagram-2-zustand/components/Flow";
import Flow3 from "@/versions/diagram-3-zustand-actions/components/Flow";

import IconVersions from "./icons/IconVersions";

function App() {
  return (
    <Switch>
      <Route path="/diagram-1-default" component={Flow1} />
      <Route path="/diagram-2-zustand" component={Flow2} />
      <Route path="/diagram-3-zustand-actions" component={Flow3} />
      <Route>
        <div className="h-screen flex flex-col justify-center">
          <main className="text-center w-[300px] mx-auto max-w-screen">
            <h1
              className={cn(
                "flex items-center gap-2",
                "text-zinc-500 text-2xl mb-4"
              )}
            >
              <IconVersions className="size-8" />
              <span>Versions</span>
            </h1>
            <nav className="text-left">
              <ul>
                <li>
                  <Link href="/diagram-1-default">1. Default</Link>
                </li>
                <li>
                  <Link href="/diagram-2-zustand">2. Zustand store</Link>
                </li>
                <li>
                  <Link href="/diagram-3-zustand-actions">
                    3. Zustand store with actions
                  </Link>
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
