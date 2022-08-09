import { useContext } from "react";
import TemplateContext from "../context/TemplateProvider";

const useTemplate = () => {
  const { template, setTemplate } = useContext(TemplateContext);

  return {
    template,
    setTemplate,
  };
};

export default useTemplate;
