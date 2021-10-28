const useRecoilInput = (value, setValue) => {
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useRecoilInput;
