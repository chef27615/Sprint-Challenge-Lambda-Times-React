import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    // console.log(props)
    
    //   if(props.tab ===props.selectedTab){
    //   return props.tab.className="tab active-tab"
    // } else{
    //   return props.tab
    // }

  return (
    <div
      className={ props.tab === props.selectedTab ? "tab active-tab" : props.tab}
      onClick={(tab) => { props.selectedTabHandler(tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};
Tab.propTypes={
  tab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}
// Make sure you include PropTypes on your props.

export default Tab;
