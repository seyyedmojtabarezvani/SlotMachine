<template>
  <div>
    <div class="row">
      <div class="col-md-6 mx-2 my-2">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <img
                  :src="slots[0].image"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </td>
              <td>
                <img
                  :src="slots[0].image"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </td>
              <td>
                <img
                  :src="slots[0].image"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-success btn-margin">Play</button>
        <button type="button" class="btn btn-primary btn-margin">
          CASH OUT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "SlotMachine",
  setup() {
    const publicPath = process.env.BASE_URL;

    let credit = ref(10);

    const slots = [
      {
        name: "cherry",
        reward: 10,
        image: `${publicPath}images/cherry.svg`,
      },
      {
        name: "lemon",
        reward: 20,
        image: `${publicPath}images/lemon.svg`,
      },
      {
        name: "orange",
        reward: 30,
        image: `${publicPath}images/orange.svg`,
      },
      {
        name: "watermelon",
        reward: 40,
        image: `${publicPath}images/watermelon.svg`,
      },
    ];
    return {
      credit,
      slots,
    };
  },
};
</script>

<style>
img {
  width: 100px;
  height: 100px;
}

td {
  text-align: center;
}

.btn-margin {
  margin-top: 80px;
  margin-left: 10px;
}
</style>
