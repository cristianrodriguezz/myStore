import { flushSync } from "react-dom"

export const viewTransitionApi = (callback) => {
  if (!document.startViewTransition) {
    callback()
  } else {
    document.startViewTransition(() => {
      flushSync(() => {
        callback()
      })
    })
  }
}