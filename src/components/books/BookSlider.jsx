import React, { useState } from "react";
import { BookItem } from "./BookItem";
import ItemsCarousel from "react-items-carousel";

const BookSlider = (props) => {
  const { list, type } = props;

  const typeSlider = (type) => {
    switch (type) {
      case "random":
        return <h3>Інші книжки</h3>;
      case "history":
        return <h3>Переглянуті книжки</h3>;
      case "recomA":
        return <h3>Рекомендації за автором</h3>;
      case "recomG":
        return <h3>Рекомендації за жанром</h3>;
      case "recomT":
        return <h3>Рекомендації за типом</h3>;
      default:
        break;
    }
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      {typeSlider(type)}
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {list.map((el) => (
          <BookItem key={el.id} {...el} />
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default BookSlider;
