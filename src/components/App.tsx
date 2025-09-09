import { useEffect } from "react";
import { Link, Route, Switch } from "wouter";
import { usePathname } from "wouter/use-browser-location";

import { cn } from "@/utils/cn";

import Flow1 from "@/versions/diagram-1-default/components/Flow";
import Flow2 from "@/versions/diagram-2-zustand-and-context/components/Flow";
import Flow3 from "@/versions/diagram-3-zustand-store-actions/components/Flow";
import Flow4 from "@/versions/diagram-4-zustand-actions/components/Flow";

import IconVersions from "./icons/IconVersions";

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
      <Route path="/2-zustand-and-context" component={Flow2} />
      <Route path="/3-zustand-store-actions" component={Flow3} />
      <Route path="/4-zustand-actions" component={Flow4} />
      <Route>
        <div className="h-screen flex flex-col justify-center">
          <main className="text-center w-[500px] py-4 mx-auto max-w-screen max-h-dvw overflow-auto">
            <h1
              className={cn(
                "flex items-center gap-2 mb-8",
                "text-zinc-500 text-2xl tracking-wider"
              )}
            >
              <IconVersions className="size-8 text-lime-700" />
              <span>Version picker</span>
            </h1>
            <nav className="text-left">
              <ul className="flex flex-col gap-5">
                <li className="border border-zinc-400 rounded-lg p-5">
                  <Link
                    href="/1-default"
                    className="font-semibold text-zinc-900 hover:text-lime-700 duration-100 tracking-wider"
                  >
                    1. Default - internal store
                  </Link>
                  <p className="leading-6 text-xs text-zinc-500 mt-3 pl-3">
                    Standard ReactFlow implementation{" "}
                    <strong className="text-zinc-600">
                      without an external store
                    </strong>
                    , with drag-and-drop and custom edge creation implemented{" "}
                    <strong className="text-zinc-600">with contexts</strong>.
                  </p>
                </li>
                <li className="border border-zinc-400 rounded-lg p-5">
                  <Link
                    href="/2-zustand-and-context"
                    className="font-semibold text-zinc-900 hover:text-lime-700 duration-100 tracking-wider"
                  >
                    2. Zustand store and contexts
                  </Link>
                  <p className="leading-6 text-xs text-zinc-500 mt-3 pl-3">
                    Default ReactFlow implementation{" "}
                    <strong className="text-zinc-600">
                      with an external global store
                    </strong>
                    .
                  </p>
                </li>
                <li className="border border-zinc-400 rounded-lg p-5">
                  <Link
                    href="/3-zustand-store-actions"
                    className="font-semibold text-zinc-900 hover:text-lime-700 duration-100 tracking-wider"
                  >
                    3. Zustand stores with actions
                  </Link>
                  <p className="leading-6 text-xs text-zinc-500 mt-3 pl-3">
                    ReactFlow implementation{" "}
                    <strong className="text-zinc-600">
                      with multiple external stores
                    </strong>
                    ,{" "}
                    <strong className="text-zinc-600">without contexts</strong>.
                  </p>
                </li>
                <li className="border border-zinc-400 rounded-lg p-5">
                  <Link
                    href="/4-zustand-actions"
                    className="font-semibold text-zinc-900 hover:text-lime-700 duration-100 tracking-wider"
                  >
                    4. Zustand stores without actions
                  </Link>
                  <p className="leading-6 text-xs text-zinc-500 mt-3 pl-3">
                    ReactFlow implementation{" "}
                    <strong className="text-zinc-600">
                      with multiple external stores
                    </strong>
                    ,{" "}
                    <strong className="text-zinc-600">without contexts</strong>{" "}
                    utilising{" "}
                    <strong className="text-zinc-600">Zustand actions</strong>.
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
