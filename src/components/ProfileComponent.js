import React from 'react';

import _find from 'lodash/find';

const ProfileComponent = ( props ) => {
  console.log(_find);
  return (
    <div>
      <h1>Profile Component!</h1>
    </div>
  );
}

export default ProfileComponent;
