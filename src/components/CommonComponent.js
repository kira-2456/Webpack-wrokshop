import React from 'react';

import a from 'lodash';

const CommonComponent = ( props ) => {
  console.log(a);
  // const a = async () => {
  //   import('lodash').then(() => {
  //     console.log(lodash);
  //   })
  // }
  //
  // useEffect(() => {
  //   a();
  // },[])
  return (
    <h1>Common Component!</h1>
  );
}

export default CommonComponent;
