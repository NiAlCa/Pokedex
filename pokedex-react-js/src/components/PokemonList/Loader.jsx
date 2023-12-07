import { miyagi } from "ldrs";

export const Loader = () => {
  miyagi.register()
  return (
    <div className="container-loader">
      
      <l-miyagi size="35" stroke="3.5" speed="0.9" color="black"></l-miyagi>
    </div>
  );
};
