import { useEffect } from "react";
import { Link, Route, Switch } from "wouter";
import { usePathname } from "wouter/use-browser-location";

import { cn } from "@/utils/cn";

import Flow1 from "@/versions/diagram-1-default/components/Flow";
import Flow2 from "@/versions/diagram-2-zustand-and-context/components/Flow";
import Flow3 from "@/versions/diagram-3-zustand-store-actions/components/Flow";
import Flow4 from "@/versions/diagram-4-zustand-actions/components/Flow";

import IconVersions from "./icons/IconVersions";
import IconGithub from "./icons/IconGithub";
import IconYoutube from "./icons/IconYoutube";

function App() {
  const pathname = usePathname();

  useEffect(() => {
    const pathTitle = pathname.replace('reactflow-app-alt-stores-demo', '').replaceAll("-", " ").replaceAll("/", "").trim();

    document.title = pathTitle
      ? `${pathTitle} | React Flow + Zustand: No-Store Actions Demo | Synergy Codes`
      : "React Flow + Zustand: No-Store Actions Demo | Synergy Codes";
  }, [pathname]);

  return (
    <Switch>
      <Route
        path="/reactflow-app-alt-stores-demo/1-default"
        component={Flow1}
      />
      <Route
        path="/reactflow-app-alt-stores-demo/2-zustand-and-context"
        component={Flow2}
      />
      <Route
        path="/reactflow-app-alt-stores-demo/3-zustand-store-actions"
        component={Flow3}
      />
      <Route
        path="/reactflow-app-alt-stores-demo/4-zustand-actions"
        component={Flow4}
      />
      <Route>
        <div className="h-screen flex flex-col justify-center">
          <main className="text-center w-[500px] p-2 mx-auto max-w-screen max-h-dvh overflow-auto">
            <h1
              className={cn(
                "flex items-center gap-2 mb-8",
                "text-zinc-500 text-2xl tracking-wider",
              )}
            >
              <IconVersions className="size-8 text-lime-700" />
              <span>Version picker</span>
            </h1>
            <nav className="text-left">
              <ul className="flex flex-col gap-5">
                <li className="border border-zinc-400 rounded-lg p-5">
                  <Link
                    href="/reactflow-app-alt-stores-demo/1-default"
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
                    href="/reactflow-app-alt-stores-demo/2-zustand-and-context"
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
                    href="/reactflow-app-alt-stores-demo/3-zustand-store-actions"
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
                    href="/reactflow-app-alt-stores-demo/4-zustand-actions"
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
              <div className="flex justify-center items-center flex-wrap text-xs gap-4 mt-5">
                <a
                  href="https://github.com/synergycodes/reactflow-app-alt-stores-demo"
                  className="flex items-center gap-2 border border-zinc-400 rounded-lg p-2 text-zinc-500 hover:text-lime-700 duration-100 tracking-wider"
                  target="_blank"
                >
                  <IconGithub className="size-6 text-[black]" />
                  Repository
                </a>
                <a
                  href="https://www.youtube.com/watch?v=41FsulrcrQg"
                  className="flex items-center gap-2 border border-zinc-400 rounded-lg p-2 text-zinc-500 hover:text-lime-700 duration-100 tracking-wider"
                  target="_blank"
                >
                  <IconYoutube className="size-6 text-[red]" />
                  App walkthrough
                </a>

                <p className="text-zinc-400 text-[10px]">
                  Created by{" "}
                  <a
                    href="https://www.synergycodes.com/"
                    className="font-semibold text-black tracking-wider"
                    title="Synergy Codes"
                    target="_blank"
                  >
                    Synergy Codes
                  </a>
                  .
                </p>
              </div>
            </nav>
          </main>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
