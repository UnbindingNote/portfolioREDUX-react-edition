import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    // sets the beginning state of page to empty, will update to the next page/prop
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <ul className="flex-row">
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
