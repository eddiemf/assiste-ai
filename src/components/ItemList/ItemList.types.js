// @flow
import { type Node } from 'react';

export type Item = {
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

export type Props = {
  items: Item[],
  renderItem: (props: ItemProps) => Node,
};

export type State = {
  selectedItemId: ?$PropertyType<Item, 'id'>,
};

export type Test = String;
