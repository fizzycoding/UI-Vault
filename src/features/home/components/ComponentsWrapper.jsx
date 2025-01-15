import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { component } from "../../../assets/allComponents/components";
import ComponentCard from "../components/ComponentCard";

function ComponentsWrapper({ filter, setGetCodeOpened, setClickedComponent }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 768: 2, 962: 3, 1024: 4 }}
    >
      <Masonry gutter="1rem">
        {Object.keys(component).map((type) =>
          component[type].map((item) => {
            if ((filter == "") || (item.type === filter))
              return (
                <ComponentCard
                  key={item.id}
                  setGetCodeOpened={setGetCodeOpened}
                  item={item}
                  setClickedComponent={setClickedComponent}
                >
                  {React.createElement(item.prev)}
                </ComponentCard>
              );
            return null;
          })
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ComponentsWrapper;
