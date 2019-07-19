export function config() {
  return {
    onError(err) {
      err.preventDefault();
      console.log(err.message);
    }
  };
}
