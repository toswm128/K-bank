const useBalance = number => {
  const balance = /\B(?=(\d{3})+(?!\d))/g;

  return number.toString().replace(balance, ",");
};

export default useBalance;
