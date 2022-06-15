import { makeStyles } from '@material-ui/styles'
import React from 'react'

const SelectButton = ({children,selected,onClick}) => {

    const useStyles = makeStyles({
        selectbutton: {
            border: "1px solid orange",
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: "Montserrat",
            cursor: "pointer",
            backgroundColor: selected ? "orange" : "",
            color: selected ? "black" : "",
            fontWeight: selected ? 600 : 500,
            "&:hover": {
              backgroundColor: "orange",
              color: "black",
            },
            width: "24%",
            
          },
    });

    const classes = useStyles();

  return (
   <span
   onClick={onClick} className={classes.selectbutton}>{children}</span>
  )
};

export default SelectButton