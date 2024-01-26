import { RefObject, useCallback, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (e: Event) => void) => {
    const memoizedHandler = useCallback(handler, [])

    useEffect(() => {
        const listener = (event: Event) => {
            if(!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            memoizedHandler(event);
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    },[ref, memoizedHandler])
};
