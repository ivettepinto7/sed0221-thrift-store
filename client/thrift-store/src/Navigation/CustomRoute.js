import React from "react";
import { Route } from "react-router-dom";
import Layout from "../Components/HOCs/Layout";
import EncodeURL from "../Components/EncodeURL";
import PropTypes from "prop-types";

function CustomRoute(props){
    //const str = EncodeURL(props.path);
    const {children : Children} = props
    return(
        <Route exact={props.exact} 
            path={props.path}
            render={(props) => (
                <Layout>
                    <Children {...props}/>
                </Layout>
            )}
        />
    )
}

CustomRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    children: PropTypes.element
}

export default CustomRoute;