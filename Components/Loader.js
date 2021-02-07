import React from 'react'
import {ScaleLoader} from 'react-spinners';

export const Loader = ({loading}) => {

    const style = `
    display: block;
    margin: 0 auto;`;

    return (
        <div>
            <ScaleLoader
              css={style}
              size={200}
              color= {"#fff"}
              loading= {loading}
              />
        </div>
    )
}
