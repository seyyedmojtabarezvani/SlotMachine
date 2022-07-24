<template>
  <div>
    <div class="row mx-2 my-2">
      <div class="col-md-6">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <img
                  :src="slots[firstSignIdx].image"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </td>
              <td>
                <img
                  :src="slots[secondSignIdx].image"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </td>
              <td>
                <img
                  :src="slots[thirdSignIdx].image"
                  class="img-fluid"
                  alt="Responsive image"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <button
          type="button"
          class="btn btn-success btn-margin"
          @click="pullLever"
        >
          Play
        </button>
        <button type="button" class="btn btn-primary btn-margin">
          CASH OUT
        </button>
      </div>
    </div>
    <div class="row mx-4 my-2">Credit: {{ credit }}</div>
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

    let firstSignIdx = ref(randomIntFromInterval(0, 3));
    let secondSignIdx = ref(randomIntFromInterval(0, 3));
    let thirdSignIdx = ref(randomIntFromInterval(0, 3));

    async function pullLever() {
      let jackpot = false;
      if (credit.value < 40) {
        jackpot = await doNormalspin();
      } else if (credit.value >= 40 && credit.value <= 60) {
        jackpot = await do30Percentspin();
      } else if (credit.value > 60) {
        jackpot = await do60Percentspin();
      }

      if (jackpot) {
        rewardUser(firstSignIdx.value);
      } else {
        deduceCreditByOne();
      }
    }

    async function doNormalspin() {
      await doNormalSpinEffect();

      if (
        firstSignIdx.value === secondSignIdx.value &&
        secondSignIdx.value === thirdSignIdx.value
      ) {
        return true;
      } else {
        return false;
      }
    }

    async function doNormalSpinEffect() {
      // For fairness in the beginning we choose our result
      const firstResult = randomIntFromInterval(0, 3);
      const secondResult = randomIntFromInterval(0, 3);
      const thirdResult = randomIntFromInterval(0, 3);

      // This is just the visual effect
      let firstSignSpin = setInterval(function () {
        firstSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      let secondSignSpin = setInterval(function () {
        secondSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      let thirdSignSpin = setInterval(function () {
        thirdSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      await sleep(1000);
      clearInterval(firstSignSpin);
      firstSignIdx.value = firstResult;

      await sleep(1000);
      clearInterval(secondSignSpin);
      secondSignIdx.value = secondResult;

      await sleep(1000);
      clearInterval(thirdSignSpin);
      thirdSignIdx.value = thirdResult;
    }

    async function do30Percentspin() {
      await do30PercentSpinEffect();

      if (
        firstSignIdx.value === secondSignIdx.value &&
        secondSignIdx.value === thirdSignIdx.value
      ) {
        return true;
      } else {
        return false;
      }
    }

    async function do30PercentSpinEffect() {
      // For fairness in the beginning we choose our result
      let firstResult = randomIntFromInterval(0, 3);
      let secondResult = randomIntFromInterval(0, 3);
      let thirdResult = randomIntFromInterval(0, 3);

      // If User wins
      if (firstResult === secondResult && secondResult === thirdResult) {
        if (do30PercentChanceRoll()) {
          firstResult = randomIntFromInterval(0, 3);
          secondResult = randomIntFromInterval(0, 3);
          thirdResult = randomIntFromInterval(0, 3);
        }
      }

      // This is just the visual effect
      let firstSignSpin = setInterval(function () {
        firstSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      let secondSignSpin = setInterval(function () {
        secondSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      let thirdSignSpin = setInterval(function () {
        thirdSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      await sleep(1000);
      clearInterval(firstSignSpin);
      firstSignIdx.value = firstResult;

      await sleep(1000);
      clearInterval(secondSignSpin);
      secondSignIdx.value = secondResult;

      await sleep(1000);
      clearInterval(thirdSignSpin);
      thirdSignIdx.value = thirdResult;
    }

    function do30PercentChanceRoll() {
      const randomNumber = Math.random();

      if (randomNumber <= 0.3) {
        return true;
      } else {
        return false;
      }
    }

    async function do60Percentspin() {
      await do60PercentSpinEffect();

      if (
        firstSignIdx.value === secondSignIdx.value &&
        secondSignIdx.value === thirdSignIdx.value
      ) {
        return true;
      } else {
        return false;
      }
    }

    async function do60PercentSpinEffect() {
      // For fairness in the beginning we choose our result
      let firstResult = randomIntFromInterval(0, 3);
      let secondResult = randomIntFromInterval(0, 3);
      let thirdResult = randomIntFromInterval(0, 3);

      // If User wins
      if (firstResult === secondResult && secondResult === thirdResult) {
        if (do60PercentChanceRoll()) {
          firstResult = randomIntFromInterval(0, 3);
          secondResult = randomIntFromInterval(0, 3);
          thirdResult = randomIntFromInterval(0, 3);
        }
      }

      // This is just the visual effect
      let firstSignSpin = setInterval(function () {
        firstSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      let secondSignSpin = setInterval(function () {
        secondSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      let thirdSignSpin = setInterval(function () {
        thirdSignIdx.value = randomIntFromInterval(0, 3);
      }, 50);

      await sleep(1000);
      clearInterval(firstSignSpin);
      firstSignIdx.value = firstResult;

      await sleep(1000);
      clearInterval(secondSignSpin);
      secondSignIdx.value = secondResult;

      await sleep(1000);
      clearInterval(thirdSignSpin);
      thirdSignIdx.value = thirdResult;
    }

    function do60PercentChanceRoll() {
      const randomNumber = Math.random();

      if (randomNumber <= 0.6) {
        return true;
      } else {
        return false;
      }
    }

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function rewardUser(idx) {
      credit.value += slots[idx].reward;
    }

    function deduceCreditByOne() {
      credit.value -= 1;
    }

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return {
      credit,
      slots,
      firstSignIdx,
      secondSignIdx,
      thirdSignIdx,
      pullLever,
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
