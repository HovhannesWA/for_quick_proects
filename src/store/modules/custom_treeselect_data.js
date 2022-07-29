export default {
  namespaced: true,
  state: {
    options: [
      {
        id: 1,
        open: false,
        text: "object-1",
        nestedArr: [
          {
            label: "orange",
            nestedArr: [
              {
                id: 1.1,
                open: false,
                text: "nested-1",
                nestedArr: [
                  { label: "watermelion" },
                  {
                    label: "lime",
                    nestedArr: [{ id: 1.1, open: false, text: "8888-1" }],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 2,
        open: false,
        text: "object-2",
        nestedArr: [{ label: "grapes" }, { label: "banana" }],
      },
    ],
  },

  getters: {
    options: (state) => state.options,
  },

  mutations: {
    setOptions(state, payload) {
      state.options = { ...payload.options };
    },
  },

  actions: {
    async setOptions(ctx, payload) {
      ctx.commit("setOptions", { options: payload.options });
    },
  },
};
