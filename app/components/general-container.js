import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shoppingCart;

  get itemCount() {
    var test = this.shoppingCart.itemList.reduce((total, item) => {
      return (total += item.count);
    }, 0);
    return test;
  }
}
