import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from 'react'
import { HistoryContext } from "../contexts";

export const Route = createRootRoute({
  component: () => {
    const historyHook = useState([])
    return (
      <>
        <HistoryContext.Provider value={historyHook}>
          <div>
            <Outlet />
          </div>
        </HistoryContext.Provider>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
      </>
    );
  },
});
