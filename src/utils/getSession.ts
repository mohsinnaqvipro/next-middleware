export const getSession = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    username: 'Mohsin Ali',
    email: 'mohsinnaqvi.engr@gmail.com',
    role: 'admin'
  }
}