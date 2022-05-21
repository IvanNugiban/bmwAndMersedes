import React from 'react';
import cl from "./LinkWithHover.module.css"

interface IChildren  {
    children: React.ReactNode,
    href: string
}

const LinkWithHover = (props: IChildren) => {
    return (
        <section className={cl["portfolio-experiment"]}>
            <a href={props.href}>
                <span className={cl.text}>{props.children}</span>
                <span className={`${cl.line} ${cl["-right"]}`}></span>
                <span className={`${cl.line} ${cl["-top"]}`}></span>
                <span className={`${cl.line} ${cl["-left"]}`}></span>
                <span className={`${cl.line} ${cl["-bottom"]}`}></span>
            </a>
        </section>
    );
};

export default LinkWithHover;