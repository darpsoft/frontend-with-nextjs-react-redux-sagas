import React from "react";

import Login from "@containers/Login";
import { Wrapper } from "@components/Wrapper";

const PageLogin = () => {
  return (
    <Wrapper isAuth={false}>
      <Login />
    </Wrapper>
  );
};

export default PageLogin;
