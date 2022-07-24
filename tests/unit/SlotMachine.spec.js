import { shallowMount } from "@vue/test-utils";
import SlotMachine from "@/components/SlotMachine.vue";

describe("SlotMachine.vue Initialization Testing", () => {
  let wrapper = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(SlotMachine, {});
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Initialized with 10 credits", () => {
    const credit = "Credit: 10";
    expect(wrapper.text()).toMatch(credit);
  });

  it("Has a table with three columns each contains an image", () => {
    expect(wrapper.findAll("table").length).toEqual(1);
    expect(wrapper.findAll("tr").length).toEqual(1);
    expect(wrapper.findAll("td").length).toEqual(3);
    expect(wrapper.findAll("img").length).toEqual(3);
  });

  it("Has two buttons one named Play and the other named CASH OUT", () => {
    expect(wrapper.findAll("button").length).toEqual(2);
    expect(wrapper.findAll("button").at(0).text()).toMatch("Play");
    expect(wrapper.findAll("button").at(1).text()).toMatch("CASH OUT");
  });
});

describe("SlotMachine.vue Pull the lever Testing", () => {
  let wrapper = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(SlotMachine, {});
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("By pulling the lever user either wins or loses", async () => {
    // Whenever Play button is clicked
    wrapper.findAll("button").at(0).trigger("click");
    await sleep(4000);
    expect(wrapper.text()).toMatch(/Credit: (9|20|30|40|50)/i);
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
