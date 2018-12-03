// @flow
import React, { Fragment, useState } from 'react';
import { type Item, type Props } from './ItemList.types';

function ItemList({ items, renderItem }: Props) {
  const [selectedItemId, setSelectedItemId] = useState(null);

  function toggleItem(itemId: $PropertyType<Item, 'id'>) {
    const selectedItem = items.find((item: Item) => item.id === itemId);

    if (!selectedItem) {
      setSelectedItemId(null);

      return;
    }

    if (selectedItem.id === selectedItemId) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(itemId);
    }
  }

  function selectItem(itemId: $PropertyType<Item, 'id'>) {
    setSelectedItemId(itemId);
  }

  function resetSelectedItem() {
    setSelectedItemId(null);
  }

  return (
    <Fragment>
      {items.map((item: Item) => renderItem({
        item,
        selectedItemId,
        toggleItem: () => toggleItem(item.id),
        selectItem: () => selectItem(item.id),
        resetSelectedItem: () => resetSelectedItem(),
      }))}
    </Fragment>
  );
}

export default ItemList;
