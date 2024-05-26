const useSecureUrl = () => {
  const port = 9080;
  const url = () => {
    const urlBase = {
      url: `http://localhost:${port}`,
    };
    return urlBase;
  };
  return url();
};

export default useSecureUrl;
