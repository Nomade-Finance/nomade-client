import { ComponentType, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { Skeleton } from "@mui/material";
import cookie from "cookie";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: ComponentType<any>) => {
  const WithAuthComponent = (props: any) => {
    const Router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = Cookies.get("accessToken");
      const expirationDate = Cookies.get("expirationDate");
      if (!token || (expirationDate && new Date() > new Date(expirationDate))) {
        Router.push("/auth/login");
      } else {
        setLoading(false);
      }
    }, [Router]);

    const handleLogout = () => {
      Cookies.remove("accessToken");
      Cookies.remove("expirationDate");
      Router.push("/auth/login");
    };

    if (loading) {
      return <Skeleton width={270} height={100} />;
    }

    return <WrappedComponent {...props} handleLogout={handleLogout} />;
  };

  WithAuthComponent.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return WithAuthComponent;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = cookie.parse(context.req.headers.cookie || "");
  const token = JSON.parse(cookies.accessToken || "");
  const expirationDate = JSON.parse(cookies.expirationDate || "");

  if (!token || new Date() > new Date(expirationDate)) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

function getDisplayName(WrappedComponent: ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
