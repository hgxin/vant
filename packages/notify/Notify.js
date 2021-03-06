import { use } from '../utils';
import { RED, WHITE } from '../utils/color';
import { PopupMixin } from '../mixins/popup';

const [sfc, bem] = use('notify');

export default sfc({
  mixins: [PopupMixin],

  props: {
    className: null,
    message: [String, Number],
    color: {
      type: String,
      value: WHITE
    },
    background: {
      type: String,
      value: RED
    },
    duration: {
      type: Number,
      value: 3000
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  render(h) {
    const style = {
      color: this.color,
      background: this.background
    };
    return (
      <transition name="van-slide-down">
        <div vShow={this.value} class={[bem(), this.className]} style={style}>
          {this.message}
        </div>
      </transition>
    );
  }
});
