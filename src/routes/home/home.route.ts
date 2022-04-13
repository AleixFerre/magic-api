export const homeRoute = {
  getHome: async (_: any, res: { send: (arg0: any) => void }) => {
    res.send('Welcome to my personal API! Please be kind.');
  },
};
