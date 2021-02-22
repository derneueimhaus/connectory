import React, { useState } from "react";

export default function Pagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
}) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // function changePage(event) {
  //   const pageNumber = Number(event.target.textContent);
  //   setCurrentPage(pageNumber);
  // }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  // const getPaginationGroup = () => {
  //   let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  //   return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  // };

  return (
    <div>
      <div className="profiles-container">
        {getPaginatedData().map((element, idx) => (
          <RenderComponent
            key={element.id}
            id={element.id}
            name={element.name}
            profession={element.profession}
            email={element.email}
            telephone={element.telephone}
            website={element.website}
            photo={element.photo}
            pro={element.pro}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          className="button pagination-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          prev
        </button>
        <button
          className="button pagination-button"
          onClick={goToNextPage}
          disabled={currentPage === pages}
        >
          <a href="#title">next</a>
        </button>
        {/* show page numbers
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))} */}
      </div>
    </div>
  );
}

// https://academind.com/tutorials/reactjs-pagination/
