import { ReactNode } from "react";

export default function ({ Children }: {
    Children: ReactNode //ReactNode means any component in React
}) {
    return <div>
        <div>Header</div>
        {Children}
        <div>Footer</div>

    </div>
}