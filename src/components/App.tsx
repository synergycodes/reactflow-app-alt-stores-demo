import { Link, Route, Switch } from "wouter";
import { usePathname } from "wouter/use-browser-location";

import { cn } from "@/utils/cn";

import Flow1 from "@/versions/diagram-1-default/components/Flow";
import Flow2 from "@/versions/diagram-2-zustand/components/Flow";
import Flow3 from "@/versions/diagram-3-zustand-no-actions/components/Flow";
import Flow4 from "@/versions/diagram-4-zustand-actions/components/Flow";

import IconVersions from "./icons/IconVersions";
import { useEffect } from "react";

function App() {
  const pathname = usePathname();

  useEffect(() => {
    const pathTitle = pathname.replaceAll("-", " ").replaceAll("/", "");

    document.title = pathTitle
      ? `${pathTitle} | ReactFlow performance demo`
      : "ReactFlow performance demo";
  }, [pathname]);

  return (
    <Switch>
      <Route path="/1-default" component={Flow1} />
      <Route path="/2-zustand" component={Flow2} />
      <Route path="/3-zustand-no-actions" component={Flow3} />
      <Route path="/4-zustand-actions" component={Flow4} />
      <Route>
        <div className="h-screen flex flex-col justify-center">
          <main className="text-center w-[500px] mx-auto max-w-screen">
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
                  <Link href="/1-default">1. Default</Link>
                  <p className="leading-7 text-sm text-zinc-500 px-10 py-5">
                    Standard ReactFlow implementation without an external store,
                    with drag-and-drop and custom edge creation implemented.
                  </p>
                </li>
                <li>
                  <Link href="/2-zustand">2. Zustand store</Link>
                  <p className="leading-7 text-sm text-zinc-500 px-10 py-5">
                    Standard ReactFlow implementation with one external store.
                  </p>
                </li>
                <li>
                  <Link href="/3-zustand-no-actions">
                    3. Zustand store without actions
                  </Link>
                  <p className="leading-7 text-sm text-zinc-500 px-10 py-5">
                    Standard ReactFlow implementation with multiple external
                    stores and zustand actions.
                  </p>
                </li>
                <li>
                  <Link href="/4-zustand-actions">
                    4. Zustand store with actions
                  </Link>
                  <p className="leading-7 text-sm text-zinc-500 px-10 py-5">
                    Standard ReactFlow implementation with multiple external
                    stores and zustand actions.
                  </p>
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
