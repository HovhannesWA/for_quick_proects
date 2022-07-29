// import Vue from "vue";

// Vue.directive("popover", {
//   inserted(el, options) {
//     const { arg, value } = options;
//     let { left, width, top, height } = el.getBoundingClientRect();

//     const div = document.createElement("div");
//     div.textContent = value;
//     el.appendChild(div);

//     div.style.position = "absolute";
//     div.style.maxWidth = "150px";
//     let {
//       left: popover_left,
//       width: popover_width,
//       top: popover_top,
//       height: popover_height,
//     } = div.getBoundingClientRect();
//     div.style.left = left + "px";
//     div.style.top = top - popover_height + "px";
//   },
// });
