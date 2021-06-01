import React, { useState } from "react";
import styled from "styled-components";

interface ICarousel {
  // pages: Array<React.ReactElement>;
  pages: Array<Function>;
  headers?: (
    active: number,
    toggleActive: (i: number) => void
  ) => React.ReactNode;
  // headers?: Array<Function>;
  withDots?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 100%;
`;
const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1rem;
  top: 1rem;
  border: 0;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

const Dot = styled.div<{ selected: boolean }>`
  height: 8px;
  width: 8px;
  margin: 2px;
  border-radius: 50%;
  background: ${({ theme, selected }) => (selected ? "darkgrey" : "lightgrey")};
`;

// controls height of page content and hides non current pages
const ContentFrame = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  padding-bottom: 2rem;
`;

// controls slide animation.
const Content = styled.div<{ offset: number; numSteps: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ numSteps }) => `repeat(${numSteps}, 100%)`};
  transform: translateX(${({ offset }) => offset * -100}%);
  transition: transform 0.2s ease;
`;

const Carousel = ({ pages, headers, withDots = true }: ICarousel) => {
  const [currPage, setCurrPage] = useState(0);

  const viewNext = () => {
    return currPage === pages.length - 1
      ? setCurrPage(0)
      : setCurrPage(currPage + 1);
  };
  const viewPrev = () => {
    return currPage !== 0 ? setCurrPage(currPage - 1) : null;
  };

  return (
    <Wrapper>
      {withDots || headers ? (
        !withDots ? (
          // Array.isArray(headers) ? (
          //   <Header>
          //     {currPage > 0 ? (
          //       <CloseButton onClick={viewPrev}>
          //         <span>{"<"}</span>
          //       </CloseButton>
          //     ) : null}
          //     {headers.map((renderTab, index): ((
          //       onClick: () => void,
          //       componentKey: string
          //     ) => React.ReactElement) =>
          //       renderTab(() => setCurrPage(index), `header-slide-${index}`)
          //     )}
          //   </Header>
          // ) : (
          <Header>{headers && headers(currPage, setCurrPage)}</Header>
        ) : (
          // )
          <Header>
            {currPage > 0 ? (
              <CloseButton onClick={viewPrev}>
                <span>{"<"}</span>
              </CloseButton>
            ) : null}
            {pages.map((p, i) => (
              <Dot
                key={"slider-dot-" + i}
                selected={currPage === i}
                onClick={() => setCurrPage(i)}
              />
            ))}
          </Header>
        )
      ) : null}
      <ContentFrame>
        <Content offset={currPage} numSteps={pages.length}>
          {pages.map((renderPage, index): ((
            next: () => void,
            componentKey: string
          ) => React.ReactElement) =>
            renderPage(viewNext, `page-slide-${index}`)
          )}
        </Content>
      </ContentFrame>
    </Wrapper>
  );
};

export default Carousel;
