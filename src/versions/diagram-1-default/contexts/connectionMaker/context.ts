import { createContext } from "react";

export const ConnectionMakerContext = createContext<
  [string | null, (startId: string | null) => void]
>([null, () => {}]);
