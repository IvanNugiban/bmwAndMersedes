import React from 'react';
import cl from './ReadMoreBtn.module.css';

type THref = {
    href: string
};

const ReadMoreBtn = ({href} : THref) => {
    return (
        <a href={href} className={cl.link}>
  <span className={cl.mask}>
    <div className={cl.link_container}>
      <span className={`${cl.link_title1} ${cl.title}`}>READ MORE</span>
      <span className={`${cl.link_title2} ${cl.title}`}>READ MORE</span>
    </div>
  </span>
            <div className={cl.link_icon}>
                <svg className={cl.icon} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                     clipRule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                </svg>
                <svg className={cl.icon} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                     clipRule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                </svg>
            </div>
        </a>
    );
};

export default ReadMoreBtn;