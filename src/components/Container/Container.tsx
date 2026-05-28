import type React from "react"
import style from "./Container.module.css"

interface Props {
    children: React.ReactNode
}

export const Container = ({children}: Props) => {

    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}