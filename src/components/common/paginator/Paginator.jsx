import React, { useState } from 'react';
import styles from './paginator.module.css';

let Paginator = ({ totalItemsCount, pageSize, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftWallNumber = (portionNumber - 1) * portionSize + 1;
  let rightWallNumber = portionNumber * portionSize;

  let onClickP = (e) => {
    onPageChanged(e);
  };

  let leftClick = () => {
    setPortionNumber(portionNumber - 1);
  };

  let rightClick = () => {
    setPortionNumber(portionNumber + 1);
  };

  return (
    <div className={styles.all}>
      <div className={styles.ListUP}>
        <span className={styles.selectedPageTitle}>Friends list pages:</span>
        {portionNumber > 1 && <button className={styles.selectedPageLR} onClick={leftClick}>/---</button>}
        {pages
          .filter((page) => 
            page <= rightWallNumber && page >= leftWallNumber)
          .map((p) => {
            return (
              <span onClick={onClickP} className={styles.selectedPage} key={p}>
                {p}
              </span>
            );
          })}
        {portionCount > portionNumber && <button className={styles.selectedPageLR} onClick={rightClick}>---\</button>}
      </div>
    </div>
  );
};

export default Paginator;
