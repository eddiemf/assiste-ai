// @flow
import React, { Component, Fragment } from 'react';
import type { Node } from 'react';

type Item = {
  id: number,
  [string]: any,
};

export type ItemProps = {
  item: Item,
  selectedItemId: ?$PropertyType<Item, 'id'>,
  toggleItem: () => void,
  resetSelectedItem: () => void,
  selectItem: () => void,
};

type Props = {
  items: Item[],
  renderItem: (props: ItemProps) => Node,
};

type State = {
  selectedItemId: ?$PropertyType<Item, 'id'>,
};

class ItemList extends Component<Props, State> {
  state = {
    selectedItemId: null,
  };

  toggleItem = (itemId: $PropertyType<Item, 'id'>) => {
    const { items } = this.props;
    const { selectedItemId } = this.state;
    const selectedItem = items.find((item: Item) => item.id === itemId);

    if (!selectedItem) {
      this.setState({ selectedItemId: null });

      return;
    }

    if (selectedItem.id === selectedItemId) {
      this.setState({ selectedItemId: null });
    } else {
      this.setState({ selectedItemId: itemId });
    }
  };

  selectItem = (itemId: $PropertyType<Item, 'id'>) => {
    this.setState({ selectedItemId: itemId });
  };

  resetSelectedItem = () => {
    this.setState({ selectedItemId: null });
  };

  render() {
    const { items, renderItem } = this.props;
    const { selectedItemId } = this.state;

    return (
      <Fragment>
        {items.map((item: Item) => renderItem({
          item,
          selectedItemId,
          toggleItem: () => this.toggleItem(item.id),
          selectItem: () => this.selectItem(item.id),
          resetSelectedItem: () => this.resetSelectedItem(),
        }))}
      </Fragment>
    );
  }
}

export default ItemList;
