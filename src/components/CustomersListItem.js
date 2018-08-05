import React from 'react'
import PropTypes from 'prop-types';
import { Link } from '../../../../../node_modules/react-router-dom';


const CustomersListItem = ({name, editAction, delAction, urlPath}) => {
    return ( 
        <div className = "customer-list-item">
            <div className = "field"><Link to={`${urlPath}${dni}`}>{name}</Link> </div>
            <div className = "field"><Link to={`${urlPath}${dni}/edit`}>{editAction}</Link> </div>
            <div className = "field"><Link to={`${urlPath}${dni}/del`}>{delAction}</Link> </div>
        </div>
     );
}

CustomersListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired
}
 
export default CustomersListItem;