import React from 'react';

import b from 'lodash/isEqual'
import a from 'lodash/find';

const CommonComponent = ( props ) => {
  console.log(a);
  console.log(a);
  console.log(b);
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
