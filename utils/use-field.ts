import { useState } from "react";

export function useField(init: string) {
    const [state, setState] = useState(init);

    function onChange(e: any) {
        setState(e.target.value);
    }

    return { value: state, onChange };
}
